// Planet Shark Shiver Builder - Main Functionality
class ShiverBuilder {
    constructor() {
        this.shiverName = "";
        this.totalPoints = 100;
        this.pointsUsed = 0;
        this.sharkanoids = [];
        this.selectedSharkanoidIndex = -1;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderSharkanoidTemplates();
        this.updatePointsDisplay();
    }

    setupEventListeners() {
        // Sharkanoid selection
        document.getElementById('add-sharkanoid-btn').addEventListener('click', () => {
            const templateSelect = document.getElementById('template-select');
            if (templateSelect.value) {
                this.addSharkanoid(templateSelect.value);
            }
        });

        // Set shiver name
        document.getElementById('shiver-name-input').addEventListener('input', (e) => {
            this.shiverName = e.target.value;
        });

        // Export button
        document.getElementById('export-btn').addEventListener('click', () => {
            this.exportShiver();
        });

        // Import button
        document.getElementById('import-btn').addEventListener('click', () => {
            document.getElementById('import-file').click();
        });

        document.getElementById('import-file').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const importedData = JSON.parse(event.target.result);
                        this.importShiver(importedData);
                    } catch (err) {
                        alert('Invalid file format. Please select a valid Shiver Builder export file.');
                    }
                };
                reader.readAsText(file);
            }
        });
        
        // Print button
        document.getElementById('print-btn').addEventListener('click', () => {
            if (this.sharkanoids.length === 0) {
                alert("You need to create at least one Sharkanoid before printing!");
                return;
            }
            
            if (!this.shiverName) {
                alert("Please give your Shiver a name before printing!");
                document.getElementById('shiver-name-input').focus();
                return;
            }
            
            this.generatePrintSummary();
        });
    }

    renderSharkanoidTemplates() {
        const templateSelect = document.getElementById('template-select');
        templateSelect.innerHTML = '<option value="">-- Select Template --</option>';
        
        for (const [key, template] of Object.entries(SHARKANOID_TEMPLATES)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = `${template.name} (${template.points} pts)`;
            templateSelect.appendChild(option);
        }
    }

    addSharkanoid(templateKey) {
        const template = SHARKANOID_TEMPLATES[templateKey];
        
        if (this.pointsUsed + template.points > this.totalPoints) {
            alert(`Not enough points remaining! You need ${template.points} points but only have ${this.totalPoints - this.pointsUsed} remaining.`);
            return;
        }
        
        const sharkanoid = {
            id: Date.now(),
            name: `${template.name}-${this.sharkanoids.length + 1}`,
            template: templateKey,
            weapons: [],
            equipment: [],
            extras: [],
            isLeader: this.sharkanoids.length === 0, // First added is leader by default
            availableSupply: template.supply,
            usedSupply: 0
        };
        
        this.sharkanoids.push(sharkanoid);
        this.pointsUsed += template.points;
        
        this.renderSharkanoids();
        this.updatePointsDisplay();
        this.selectSharkanoid(this.sharkanoids.length - 1);
    }

    renderSharkanoids() {
        const list = document.getElementById('sharkanoid-list');
        list.innerHTML = '';
        
        this.sharkanoids.forEach((sharkanoid, index) => {
            const template = SHARKANOID_TEMPLATES[sharkanoid.template];
            
            const item = document.createElement('div');
            item.className = 'sharkanoid-item';
            if (index === this.selectedSharkanoidIndex) {
                item.classList.add('selected');
            }
            if (sharkanoid.isLeader) {
                item.classList.add('leader');
            }
            
            item.innerHTML = `
                <div class="sharkanoid-header">
                    <span class="sharkanoid-name">${sharkanoid.name}</span>
                    <span class="sharkanoid-type">${template.name}</span>
                    <span class="sharkanoid-points">${template.points}pts</span>
                </div>
                <div class="sharkanoid-supply">Supply: ${sharkanoid.usedSupply}/${template.supply}</div>
            `;
            
            item.addEventListener('click', () => {
                this.selectSharkanoid(index);
            });
            
            list.appendChild(item);
        });
    }

    selectSharkanoid(index) {
        this.selectedSharkanoidIndex = index;
        this.renderSharkanoids();
        
        if (index >= 0) {
            this.renderSharkanoidDetails(this.sharkanoids[index]);
            document.getElementById('sharkanoid-details').style.display = 'block';
        } else {
            document.getElementById('sharkanoid-details').style.display = 'none';
        }
    }

    renderSharkanoidDetails(sharkanoid) {
        const template = SHARKANOID_TEMPLATES[sharkanoid.template];
        const detailsDiv = document.getElementById('sharkanoid-details');
        
        // Basic info
        document.getElementById('detail-name').value = sharkanoid.name;
        document.getElementById('detail-type').textContent = template.name;
        document.getElementById('detail-leader').checked = sharkanoid.isLeader;
        
        // Stats
        document.getElementById('detail-health').textContent = template.health;
        document.getElementById('detail-speed').textContent = template.speed;
        document.getElementById('detail-armor').textContent = template.armor;
        document.getElementById('detail-melee').textContent = template.meleeAttack;
        document.getElementById('detail-range').textContent = template.rangeAttack;
        document.getElementById('detail-actions').textContent = template.actions;
        document.getElementById('detail-supply').textContent = `${sharkanoid.usedSupply}/${template.supply}`;
        document.getElementById('detail-special').textContent = template.special || "None";
        
        // Update weapon selection dropdown
        const weaponSelect = document.getElementById('weapon-select');
        weaponSelect.innerHTML = '<option value="">-- Select Weapon --</option>';
        
        WEAPONS.forEach((weapon, index) => {
            if (weapon.supplyCost <= (template.supply - sharkanoid.usedSupply)) {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = `${weapon.name} (${weapon.supplyCost} supply)`;
                weaponSelect.appendChild(option);
            }
        });
        
        // Update equipment selection dropdown
        const equipmentSelect = document.getElementById('equipment-select');
        equipmentSelect.innerHTML = '<option value="">-- Select Equipment --</option>';
        
        EQUIPMENT.forEach((equipment, index) => {
            if (equipment.supplyCost <= (template.supply - sharkanoid.usedSupply)) {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = `${equipment.name} (${equipment.supplyCost} supply)`;
                equipmentSelect.appendChild(option);
            }
        });
        
        // Update extras selection dropdown
        const extrasSelect = document.getElementById('extras-select');
        extrasSelect.innerHTML = '<option value="">-- Select Extras --</option>';
        
        EXTRAS.forEach((extra, index) => {
            if (extra.pointCost <= (this.totalPoints - this.pointsUsed)) {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = `${extra.name} (${extra.pointCost} points)`;
                extrasSelect.appendChild(option);
            }
        });
        
        // Render selected weapons
        this.renderSelectedItems(
            sharkanoid.weapons, 
            'selected-weapons',
            (weapon) => `${weapon.name} (${weapon.supplyCost} supply)`,
            (index) => this.removeWeapon(index)
        );
        
        // Render selected equipment
        this.renderSelectedItems(
            sharkanoid.equipment,
            'selected-equipment',
            (item) => `${item.name} (${item.supplyCost} supply)`,
            (index) => this.removeEquipment(index)
        );
        
        // Render selected extras
        this.renderSelectedItems(
            sharkanoid.extras,
            'selected-extras',
            (item) => `${item.name} (${item.pointCost} points)`,
            (index) => this.removeExtra(index)
        );
        
        // Set up event listeners for detail changes
        document.getElementById('detail-name').onchange = (e) => {
            sharkanoid.name = e.target.value;
            this.renderSharkanoids();
        };
        
        document.getElementById('detail-leader').onchange = (e) => {
            if (e.target.checked) {
                // Unset current leader if any
                this.sharkanoids.forEach(s => s.isLeader = false);
                sharkanoid.isLeader = true;
                this.renderSharkanoids();
            } else if (sharkanoid.isLeader) {
                alert("Your Shiver must have a leader!");
                e.target.checked = true;
            }
        };
        
        // Set up add buttons
        document.getElementById('add-weapon-btn').onclick = () => {
            const index = parseInt(document.getElementById('weapon-select').value);
            if (!isNaN(index)) {
                this.addWeapon(index);
            }
        };
        
        document.getElementById('add-equipment-btn').onclick = () => {
            const index = parseInt(document.getElementById('equipment-select').value);
            if (!isNaN(index)) {
                this.addEquipment(index);
            }
        };
        
        document.getElementById('add-extras-btn').onclick = () => {
            const index = parseInt(document.getElementById('extras-select').value);
            if (!isNaN(index)) {
                this.addExtra(index);
            }
        };
        
        // Delete sharkanoid button
        document.getElementById('delete-sharkanoid-btn').onclick = () => {
            if (confirm(`Are you sure you want to delete ${sharkanoid.name}?`)) {
                this.deleteSharkanoid();
            }
        };
    }

    renderSelectedItems(items, containerId, labelFunc, removeFunc) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        
        if (items.length === 0) {
            container.innerHTML = '<div class="none-selected">None selected</div>';
            return;
        }
        
        items.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'selected-item';
            
            itemDiv.innerHTML = `
                <span class="item-name">${labelFunc(item)}</span>
                <button class="remove-btn" title="Remove">✕</button>
            `;
            
            itemDiv.querySelector('.remove-btn').addEventListener('click', () => removeFunc(index));
            
            container.appendChild(itemDiv);
        });
    }

    addWeapon(weaponIndex) {
        const sharkanoid = this.sharkanoids[this.selectedSharkanoidIndex];
        const weapon = WEAPONS[weaponIndex];
        
        // Check if we have enough supply
        if (sharkanoid.usedSupply + weapon.supplyCost > SHARKANOID_TEMPLATES[sharkanoid.template].supply) {
            alert("Not enough supply available!");
            return;
        }
        
        // Check if we have enough hands
        const usedHands = sharkanoid.weapons.reduce((total, w) => total + w.hands, 0);
        if (usedHands + weapon.hands > 2) {
            // Special case for MECH which can use 2-handed weapons with 1 hand
            if (!(sharkanoid.template === 'mech' && weapon.hands === 2 && usedHands < 2)) {
                alert("Not enough hands available! Sharkanoids only have 2 hands.");
                return;
            }
        }
        
        sharkanoid.weapons.push({ ...weapon });
        sharkanoid.usedSupply += weapon.supplyCost;
        this.renderSharkanoidDetails(sharkanoid);
        this.renderSharkanoids();
    }

    removeWeapon(weaponIndex) {
        const sharkanoid = this.sharkanoids[this.selectedSharkanoidIndex];
        const weapon = sharkanoid.weapons[weaponIndex];
        
        sharkanoid.usedSupply -= weapon.supplyCost;
        sharkanoid.weapons.splice(weaponIndex, 1);
        
        this.renderSharkanoidDetails(sharkanoid);
        this.renderSharkanoids();
    }

    addEquipment(equipmentIndex) {
        const sharkanoid = this.sharkanoids[this.selectedSharkanoidIndex];
        const equipment = EQUIPMENT[equipmentIndex];
        
        // Check if we have enough supply
        if (sharkanoid.usedSupply + equipment.supplyCost > SHARKANOID_TEMPLATES[sharkanoid.template].supply) {
            alert("Not enough supply available!");
            return;
        }
        
        // Check if equipment can be taken only once
        if (equipment.special.includes("May only be taken once") && 
            sharkanoid.equipment.some(e => e.name === equipment.name)) {
            alert(`${equipment.name} can only be taken once!`);
            return;
        }
        
        // Check if it takes up a hand
        if (equipment.special.includes("Takes up 1 hand")) {
            const usedHands = sharkanoid.weapons.reduce((total, w) => total + w.hands, 0) + 
                             sharkanoid.equipment.filter(e => e.special.includes("Takes up 1 hand")).length;
            
            if (usedHands + 1 > 2) {
                alert("Not enough hands available! Sharkanoids only have 2 hands.");
                return;
            }
        }
        
        sharkanoid.equipment.push({ ...equipment });
        sharkanoid.usedSupply += equipment.supplyCost;
        this.renderSharkanoidDetails(sharkanoid);
        this.renderSharkanoids();
    }

    removeEquipment(equipmentIndex) {
        const sharkanoid = this.sharkanoids[this.selectedSharkanoidIndex];
        const equipment = sharkanoid.equipment[equipmentIndex];
        
        sharkanoid.usedSupply -= equipment.supplyCost;
        sharkanoid.equipment.splice(equipmentIndex, 1);
        
        this.renderSharkanoidDetails(sharkanoid);
        this.renderSharkanoids();
    }

    addExtra(extraIndex) {
        const sharkanoid = this.sharkanoids[this.selectedSharkanoidIndex];
        const extra = EXTRAS[extraIndex];
        
        // Check if we have enough points
        if (this.pointsUsed + extra.pointCost > this.totalPoints) {
            alert(`Not enough points remaining! You need ${extra.pointCost} points but only have ${this.totalPoints - this.pointsUsed} remaining.`);
            return;
        }
        
        sharkanoid.extras.push({ ...extra });
        this.pointsUsed += extra.pointCost;
        
        this.renderSharkanoidDetails(sharkanoid);
        this.updatePointsDisplay();
    }

    removeExtra(extraIndex) {
        const sharkanoid = this.sharkanoids[this.selectedSharkanoidIndex];
        const extra = sharkanoid.extras[extraIndex];
        
        this.pointsUsed -= extra.pointCost;
        sharkanoid.extras.splice(extraIndex, 1);
        
        this.renderSharkanoidDetails(sharkanoid);
        this.updatePointsDisplay();
    }

    deleteSharkanoid() {
        const sharkanoid = this.sharkanoids[this.selectedSharkanoidIndex];
        const template = SHARKANOID_TEMPLATES[sharkanoid.template];
        
        // Return points for this sharkanoid and its extras
        this.pointsUsed -= template.points;
        sharkanoid.extras.forEach(extra => {
            this.pointsUsed -= extra.pointCost;
        });
        
        // If this was the leader, assign a new one if possible
        const wasLeader = sharkanoid.isLeader;
        
        // Remove the sharkanoid
        this.sharkanoids.splice(this.selectedSharkanoidIndex, 1);
        
        // If we removed the leader, assign a new one if possible
        if (wasLeader && this.sharkanoids.length > 0) {
            this.sharkanoids[0].isLeader = true;
        }
        
        // Update UI
        this.updatePointsDisplay();
        this.renderSharkanoids();
        
        if (this.sharkanoids.length > 0) {
            this.selectSharkanoid(Math.min(this.selectedSharkanoidIndex, this.sharkanoids.length - 1));
        } else {
            this.selectSharkanoid(-1);
        }
    }

    updatePointsDisplay() {
        document.getElementById('points-used').textContent = this.pointsUsed;
        document.getElementById('points-remaining').textContent = this.totalPoints - this.pointsUsed;
    }

    exportShiver() {
        if (this.sharkanoids.length === 0) {
            alert("You need to create at least one Sharkanoid before exporting!");
            return;
        }
        
        if (!this.shiverName) {
            alert("Please give your Shiver a name before exporting!");
            document.getElementById('shiver-name-input').focus();
            return;
        }
        
        // Check if we have a leader
        if (!this.sharkanoids.some(s => s.isLeader)) {
            alert("You must nominate a leader for your Shiver!");
            return;
        }
        
        const exportData = {
            shiverName: this.shiverName,
            pointsUsed: this.pointsUsed,
            totalPoints: this.totalPoints,
            sharkanoids: this.sharkanoids
        };
        
        const exportStr = JSON.stringify(exportData);
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(exportStr);
        
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `${this.shiverName.replace(/[^a-z0-9]/gi, '_')}.shiver.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        
        // Generate and open the print summary in a new tab
        this.generatePrintSummary();
        
        alert("Shiver exported successfully!");
    }
    
    generatePrintSummary() {
        // Create a new window for the print summary
        const printWindow = window.open('', '_blank');
        
        // Generate the HTML content
        let html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${this.shiverName} - Shiver Summary</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        line-height: 1.3;
                        margin: 0;
                        padding: 10px;
                        background-color: white;
                        color: black;
                        font-size: 10pt;
                    }
                    
                    .container {
                        max-width: 100%;
                        margin: 0 auto;
                    }
                    
                    h1, h2, h3 {
                        margin-top: 0;
                        margin-bottom: 5px;
                    }
                    
                    h1 {
                        border-bottom: 1px solid #333;
                        padding-bottom: 5px;
                        font-size: 16pt;
                    }
                    
                    h2 {
                        font-size: 12pt;
                    }
                    
                    h3 {
                        font-size: 10pt;
                        margin-bottom: 3px;
                    }
                    
                    .shiver-info {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 10px;
                    }
                    
                    .sharkanoids-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 10px;
                    }
                    
                    .sharkanoid {
                        border: 1px solid #333;
                        border-radius: 3px;
                        padding: 8px;
                        margin-bottom: 10px;
                        page-break-inside: avoid;
                    }
                    
                    .sharkanoid-header {
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 1px solid #ccc;
                        padding-bottom: 2px;
                        margin-bottom: 5px;
                    }
                    
                    .stats-grid {
                        display: grid;
                        grid-template-columns: repeat(6, 1fr);
                        gap: 3px;
                        margin-bottom: 5px;
                    }
                    
                    .stat-item {
                        border: 1px solid #ccc;
                        padding: 2px;
                        text-align: center;
                        font-size: 9pt;
                    }
                    
                    .stat-name {
                        font-size: 7pt;
                        text-transform: uppercase;
                        color: #666;
                    }
                    
                    .stat-value {
                        font-weight: bold;
                    }
                    
                    .items-section {
                        margin-bottom: 5px;
                    }
                    
                    .section-header {
                        font-weight: bold;
                        border-bottom: 1px solid #ccc;
                        margin-bottom: 2px;
                    }
                    
                    .item {
                        padding: 2px;
                        margin-bottom: 2px;
                        font-size: 9pt;
                    }
                    
                    .item-name {
                        font-weight: bold;
                    }
                    
                    .item-stats {
                        font-size: 8pt;
                    }
                    
                    .item-description {
                        font-size: 8pt;
                        color: #555;
                    }
                    
                    .reference {
                        margin-top: 15px;
                        border-top: 1px solid #333;
                        padding-top: 5px;
                        page-break-before: always;
                    }
                    
                    .rules-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 5px;
                    }
                    
                    .rule {
                        margin-bottom: 5px;
                        font-size: 9pt;
                    }
                    
                    .rule-name {
                        font-weight: bold;
                    }
                    
                    .print-button {
                        margin-top: 10px;
                        text-align: center;
                    }
                    
                    .print-button button {
                        padding: 10px 20px;
                        font-size: 1rem;
                        cursor: pointer;
                    }
                    
                    .leader-badge {
                        background-color: gold;
                        color: black;
                        padding: 1px 3px;
                        border-radius: 2px;
                        font-size: 7pt;
                        margin-left: 5px;
                    }
                    
                    .special-ability {
                        margin-bottom: 5px;
                        font-size: 9pt;
                    }
                    
                    @media print {
                        .print-button {
                            display: none;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>${this.shiverName}</h1>
                    
                    <div class="shiver-info">
                        <div>Points: ${this.pointsUsed}/${this.totalPoints}</div>
                        <div>Sharkanoids: ${this.sharkanoids.length}</div>
                    </div>
                    
                    <div class="sharkanoids-grid">
        `;
        
        // Add each Sharkanoid
        this.sharkanoids.forEach(sharkanoid => {
            const template = SHARKANOID_TEMPLATES[sharkanoid.template];
            
            html += `
                <div class="sharkanoid">
                    <div class="sharkanoid-header">
                        <h2>${sharkanoid.name}${sharkanoid.isLeader ? '<span class="leader-badge">LEADER</span>' : ''}</h2>
                        <div>${template.name} (${template.points} pts)</div>
                    </div>
                    
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-name">Health</div>
                            <div class="stat-value">${template.health}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-name">Speed</div>
                            <div class="stat-value">${template.speed}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-name">Armor</div>
                            <div class="stat-value">${template.armor}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-name">M.Atk</div>
                            <div class="stat-value">${template.meleeAttack}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-name">R.Atk</div>
                            <div class="stat-value">${template.rangeAttack}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-name">Acts</div>
                            <div class="stat-value">${template.actions}</div>
                        </div>
                    </div>
            `;
            
            // Add special ability if any
            if (template.special) {
                html += `
                    <div class="special-ability">
                        <span class="section-header">Special:</span>
                        ${template.special}
                    </div>
                `;
            }
            
            // Add weapons
            if (sharkanoid.weapons.length > 0) {
                html += `
                    <div class="items-section">
                        <div class="section-header">Weapons:</div>
                `;
                
                sharkanoid.weapons.forEach(weapon => {
                    html += `
                        <div class="item">
                            <span class="item-name">${weapon.name}</span> (S:${weapon.supplyCost})
                            <div class="item-stats">R:${weapon.range} | H:${weapon.hands} | A:${weapon.attackDice} | D:${weapon.damage}${weapon.special ? ` | ${weapon.special}` : ''}</div>
                        </div>
                    `;
                });
                
                html += `</div>`;
            }
            
            // Add equipment
            if (sharkanoid.equipment.length > 0) {
                html += `
                    <div class="items-section">
                        <div class="section-header">Equipment:</div>
                `;
                
                sharkanoid.equipment.forEach(equip => {
                    html += `
                        <div class="item">
                            <span class="item-name">${equip.name}</span> (S:${equip.supplyCost})
                            <div class="item-description">${equip.special}</div>
                        </div>
                    `;
                });
                
                html += `</div>`;
            }
            
            // Add extras
            if (sharkanoid.extras.length > 0) {
                html += `
                    <div class="items-section">
                        <div class="section-header">Extras:</div>
                `;
                
                sharkanoid.extras.forEach(extra => {
                    html += `
                        <div class="item">
                            <span class="item-name">${extra.name}</span> (P:${extra.pointCost})
                            <div class="item-description">${extra.special}</div>
                        </div>
                    `;
                });
                
                html += `</div>`;
            }
            
            html += `</div>`;
        });
        
        // Add special rules reference
        html += `
                    </div>
                    
                    <div class="reference">
                        <h2>Special Rules Reference</h2>
                        <div class="rules-grid">
        `;
        
        for (const [ruleName, ruleDescription] of Object.entries(SPECIAL_RULES)) {
            html += `
                <div class="rule">
                    <span class="rule-name">${ruleName}:</span> ${ruleDescription}
                </div>
            `;
        }
        
        html += `
                        </div>
                    </div>
                    
                    <div class="print-button">
                        <button onclick="window.print()">Print Summary</button>
                    </div>
                </div>
            </body>
            </html>
        `;
        
        // Write the HTML to the new window and close the document
        printWindow.document.write(html);
        printWindow.document.close();
    }

    importShiver(data) {
        if (!data.shiverName || !data.sharkanoids || !Array.isArray(data.sharkanoids)) {
            alert("Invalid Shiver data format!");
            return;
        }
        
        // Reset current state
        this.shiverName = data.shiverName;
        this.pointsUsed = data.pointsUsed || 0;
        this.sharkanoids = data.sharkanoids;
        
        // Recalculate usedSupply for each sharkanoid
        this.sharkanoids.forEach(sharkanoid => {
            const template = SHARKANOID_TEMPLATES[sharkanoid.template];
            if (!template) {
                console.error(`Unknown template: ${sharkanoid.template}`);
                return;
            }
            
            sharkanoid.usedSupply = 0;
            sharkanoid.weapons.forEach(weapon => {
                sharkanoid.usedSupply += weapon.supplyCost;
            });
            sharkanoid.equipment.forEach(equipment => {
                sharkanoid.usedSupply += equipment.supplyCost;
            });
        });
        
        // Update UI
        document.getElementById('shiver-name-input').value = this.shiverName;
        this.updatePointsDisplay();
        this.renderSharkanoids();
        
        if (this.sharkanoids.length > 0) {
            this.selectSharkanoid(0);
        }
        
        alert("Shiver imported successfully!");
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.shiverBuilder = new ShiverBuilder();
});
