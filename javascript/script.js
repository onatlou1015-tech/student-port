(function() {
    
    const studentSites = {
        'M3101': 'https://johndoe.vercel.app/portfolio/',
        'M3102': 'https://sarahsmith.github.io/portfolio/',
        'M3103': 'https://alexchen.netlify.app/portfolio/',
        'M3104': 'https://emilyportfolio.com/portfolio/',
        'M3105': 'https://michael-dev.herokuapp.com/portfolio/',
        'M3106': 'https://jessicacode.io/portfolio/',
        'M3107': 'https://davidkim.tech/portfolio/',
        'M3108': 'https://amandawrites.dev/portfolio/',
        'M3109': 'https://briancodes.xyz/portfolio/',
        'M3110': 'https://lauragreen.design/portfolio/',
        'M3111': 'https://kevinm.vercel.app/portfolio/',
        'M3112': 'https://rachelchen.dev/portfolio/',
        'M3113': 'https://jasonliu.works/portfolio/',
        'M3114': 'https://ninapatel.com/portfolio/',
        'M3115': 'https://ericwang.me/portfolio/',
        'M3116': 'https://michelledev.xyz/portfolio/',
        'M3117': 'https://justinbrown.dev/portfolio/',
        'M3118': 'https://ashleynguyen.design/portfolio/',
        'M3119': 'https://mattthomas.io/portfolio/',
        'M3120': 'https://oliviapark.art/portfolio/',
        'M3121': 'https://ryangarcia.dev/portfolio/',
        'M3122': 'https://emmarodriguez.com/portfolio/',
        'M3123': 'https://noahmartin.tech/portfolio/',
        'M3124': 'https://chloejackson.xyz/portfolio/',
        'M3125': 'https://liamwilson.dev/portfolio/',
        'M3126': 'https://zoedavis.design/portfolio/',
        'M3127': 'https://elijahbrown.io/portfolio/',
        'M3128': 'https://millermiller.art/portfolio/',
        'M3129': 'https://gracekim.dev/portfolio/',
        'M3130': 'https://oliverlee.tech/portfolio/',
        'M3201': 'https://sophiawalker.com/portfolio/',
        'M3202': 'https://jacksonmoore.dev/portfolio/',
        'M3203': 'https://averytaylor.xyz/portfolio/',
        'M3204': 'https://averytaylor.xyz/portfolio/',
        'M3205': 'https://averytaylor.xyz/portfolio/',
        'M3206': 'https://averytaylor.xyz/portfolio/',
        'M3207': 'https://averytaylor.xyz/portfolio/',
        'M3208': 'https://averytaylor.xyz/portfolio/',
        'M3209': 'https://averytaylor.xyz/portfolio/',
        'M3210': 'https://averytaylor.xyz/portfolio/',
        'M3211': 'https://averytaylor.xyz/portfolio/',
        'M3212': 'https://averytaylor.xyz/portfolio/',
        'M3213': 'https://averytaylor.xyz/portfolio/',
        'M3214': 'https://averytaylor.xyz/portfolio/',
        'M3215': 'https://averytaylor.xyz/portfolio/',
        'M3216': 'https://averytaylor.xyz/portfolio/',
        'M3217': 'https://averytaylor.xyz/portfolio/',
        'M3218': 'https://averytaylor.xyz/portfolio/',
        'M3219': 'https://averytaylor.xyz/portfolio/',
        'M3220': 'https://averytaylor.xyz/portfolio/',
        'M3221': 'https://averytaylor.xyz/portfolio/',
        'M3222': 'https://averytaylor.xyz/portfolio/',
        'M3223': 'https://averytaylor.xyz/portfolio/',
        'M3224': 'https://averytaylor.xyz/portfolio/',
        'M3225': 'https://averytaylor.xyz/portfolio/',
        'M3226': 'https://averytaylor.xyz/portfolio/',
        'M3227': 'https://averytaylor.xyz/portfolio/',
        'M3228': 'https://averytaylor.xyz/portfolio/',
        'M3229': 'https://averytaylor.xyz/portfolio/',
        'M3230': 'https://averytaylor.xy/portfolio/z'
    };

    
    const colorPalette = [
        '#FF6B6B', '#FF8E53', '#FECA57', '#48DBFB', '#0ABDE3', '#10AC84',
        '#EE5A24', '#5F27CD', '#220d7c', '#FF9FF3', '#54A0FF', '#5F6DEC',
        '#FF6348', '#1cb54c', '#70A1FF', '#FF4757', '#2ED573', '#1E90FF',
        '#FF6B81', '#7F8FA6', '#F368E0', '#00D2D3', '#54A0FF', '#5F27CD',
        '#FF9F43', '#10AC84', '#EE5A24', '#0ABDE3', '#341F97', '#FF4757',
        '#2ED573', '#1E90FF', '#FF6B81', '#7F8FA6', '#F368E0', '#00D2D3',
        '#FF6B6B', '#FF8E53', '#FECA57', '#48DBFB', '#0ABDE3', '#10AC84',
        '#EE5A24', '#5F27CD', '#341F97', '#FF9FF3', '#54A0FF', '#5F6DEC',
        '#FF6348', '#7BED9F', '#70A1FF', '#FF4757', '#2ED573', '#1E90FF',
        '#FF6B81', '#7F8FA6', '#F368E0', '#00D2D3', '#54A0FF', '#5F27CD'
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
            
            card.dataset.color = cardColor;

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