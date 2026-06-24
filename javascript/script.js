(function() {
    
    const studentSites = {
        'M3101': 'https://github.io/portfolio/',
        'M3102': 'https://github.io/portfolio/',
        'M3103': 'https://github.io/portfolio/',
        'M3104': 'https://github.io/portfolio/',
        'M3105': 'https://github.io/portfolio/',
        'M3106': 'https://github.io/portfolio/',
        'M3107': 'https://github.io/portfolio/',
        'M3108': 'https://github.io/portfolio/',
        'M3109': 'https://github.io/portfolio/',
        'M3110': 'https://github.io/portfolio/',
        'M3111': 'https://github.io/portfolio/',
        'M3112': 'https://github.io/portfolio/',
        'M3113': 'https://github.io/portfolio/',
        'M3114': 'https://github.io/portfolio/',
        'M3115': 'https://github.io/portfolio/',
        'M3116': 'https://github.io/portfolio/',
        'M3117': 'https://github.io/portfolio/',
        'M3118': 'https://github.io/portfolio/',
        'M3119': 'https://github.io/portfolio/',
        'M3120': 'https://github.io/portfolio/',
        'M3121': 'https://github.io/portfolio/',
        'M3122': 'https://github.io/portfolio/',
        'M3123': 'https://github.io/portfolio/',
        'M3124': 'https://github.io/portfolio/',
        'M3125': 'https://github.io/portfolio/',
        'M3126': 'https://github.io/portfolio/',
        'M3127': 'https://github.io/portfolio/',
        'M3128': 'https://github.io/portfolio/',
        'M3129': 'https://github.io/portfolio/',
        'M3130': 'https://github.io/portfolio/',
        'M3201': 'https://M3201JavaJuggler.github.io/portfolio32/',
        'M3203':'https://M3203LabCoatCoder.github.io/portfolio32/',
        'M3204':'https://M32LearnByCoding.github.io/portfolio32/',
        'M3205':'https://LabCoatCoder.github.io/portfolio32/',
        'M3206':'https://LunarLogicM3206.github.io/portfolio32/',
        'M3207':'https://M3207MidnightCommit.github.io/portfolio32/',
        'M3208':'https://M3208NeonCoder.github.io/portfolio32/',
        'M3209':'https://M3209NodeNovice.github.io/portfolio32/',
        'M3210':'https://NewGenNotebook.github.io/portfolio32/',
        'M3211':'https://M3211PhantomPush.github.io/portfolio32/',
        'M3212':'https://PixelPioneerM3212.github.io/portfolio32/',
        'M3213':'https://ProjectPanda.github.io/portfolio32/',
        'M3214':'https://M3214PyNewbie.github.io/portfolio32/',
        'M3215':'https://ReactRookie.github.io/portfolio32/',
        'M3216':'https://M3216RogueRuntime.github.io/portfolio32/',
        'M3217':'https://RustRamen.github.io/portfolio32/',
        'M3218':'https://M3235ScriptStudent.github.io/portfolio32/',
        'M3219':'https://M3219NovaNinja.github.io/portfolio32/',
        'M3220':'https://M3220SQLStudent.github.io/portfolio32/',
        'M3221':'https://PhantomPush.github.io/portfolio32/',
        'M3222':'https://StudentStack.github.io/portfolio32/',
        'M3223':'https://M3223SwiftScholar.github.io/portfolio32/',
        'M3224':'https://M3224SyntaxScholar.github.io/portfolio32/',
        'M3225':'https://ThesisTinker.github.io/portfolio32/',
        'M3226':'https://TheStudiousDev.github.io/portfolio32/',
        'M3227':'https://M3227UnitoCode.github.io/portfolio32/',
        'M3228':'https://VortexDev28.github.io/portfolio32/',
        'M3229':'https://ReactRookie.github.io/portfolio32/',
        'M3230':'https://ZenCoder.github.io/portfolio32/',
        'M3202':'https://M3203KernelKid.github.io/portfolio32/'    
    };
    
    const colorPalette = [
        '#000000','#000000','#000000','#000000','#000000','#000000','#000000',
        '#000000','#000000','#000000','#000000','#000000','#000000','#000000',
        '#000000','#000000','#000000','#000000','#000000','#000000','#000000',
        '#000000','#000000','#000000','#000000','#000000','#000000','#000000',
        '#000000','#000000','#000000','#000000','#000000','#000000','#000000',
        '#000000','#000000','#000000','#000000','#000000','#000000','#000000',
        '#000000','#000000','#000000','#000000','#000000','#000000','#000000',
        '#000000','#000000','#000000','#000000','#000000','#000000','#000000',
        '#000000','#000000','#000000','#000000','#000000','#000000','#000000'
    ];

    
    const studentIds = [];
    for (let i = 3101; i <= 3130; i++) {
        studentIds.push('M' + i);
    }
    for (let i = 3201; i <= 3230; i++) {
        studentIds.push('M' + i);
    }

    
    const grid = document.getElementById('studentGrid');
    if (!grid) return;

    
    function renderGrid() {
        grid.innerHTML = '';
        
        studentIds.forEach((id, index) => {
            const card = document.createElement('div');
            card.className = 'student-card';
            card.style.animationDelay = (0.02 + index * 0.03) + 's';
            card.dataset.studentId = id;
            
            const colorIndex = index % colorPalette.length;
            const cardColor = colorPalette[colorIndex];            
            
            card.style.background = `linear-gradient(135deg, ${cardColor}22 0%, ${cardColor}44 100%)`;
            card.style.borderColor = cardColor;
            card.style.borderWidth = '2px';            
            
            //card.dataset.color = cardColor;

            const url = studentSites[id] || 'No site set';
            const displayUrl = url !== 'No site set' ? url : '';

            card.innerHTML = `
                <span class="card-icon" style="color: ${cardColor}"><i class="fas fa-user-graduate"></i></span>
                <span class="student-id" style="color: ${cardColor}">${id}</span>                
            `;
            
            card.addEventListener('mouseenter', function() {
                const color = this.dataset.color;
                this.style.background = `linear-gradient(135deg, ${color}33 0%, ${color}66 100%)`;
                this.style.transform = 'translateY(-6px) scale(1.02)';
                this.style.boxShadow = `0 16px 32px -10px ${color}66`;
            });

            card.addEventListener('mouseleave', function() {
                const color = this.dataset.color;
                this.style.background = `linear-gradient(135deg, ${color}22 0%, ${color}44 100%)`;
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 8px 18px -6px rgba(0, 20, 30, 0.08)';
            });

            card.addEventListener('click', function() {
                const sid = this.dataset.studentId;
                const targetUrl = studentSites[sid];
                if (targetUrl && targetUrl !== 'No site set') {
                    window.open(targetUrl, '_blank');
                } else {
                    alert(`No site configured for ${sid}. Please add a URL.`);
                }
            });

            grid.appendChild(card);
        });

        
        const countSpan = document.getElementById('studentCount');
        if (countSpan) {
            countSpan.textContent = studentIds.length;
        }
    }

    
    renderGrid();
    console.log(`✨ Student Hub loaded · ${studentIds.length} students ready`);
})();