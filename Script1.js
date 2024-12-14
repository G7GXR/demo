// JavaScript source code
document.addEventListener('DOMContentLoaded', function () {
    const heroes = [
        { name: '士兵76', role: '突击', image: 'https://example.com/soldier76.jpg' },
        { name: '法老之鹰', role: '突击', image: 'https://example.com/pharah.jpg' },
        { name: '猎空', role: '突击', image: 'https://example.com/tracer.jpg' },
        { name: '黑百合', role: '突击', image: 'https://example.com/widowmaker.jpg' },
        { name: '半藏', role: '突击', image: 'https://example.com/hanzo.jpg' },
        { name: '麦克雷', role: '突击', image: 'https://example.com/mccree.jpg' },
        { name: '回声', role: '突击', image: 'https://example.com/echo.jpg' },
        { name: '索杰恩', role: '突击', image: 'https://example.com/sojourn.jpg' },
        { name: '源氏', role: '突击', image: 'https://example.com/genji.jpg' },
        { name: '卡西迪', role: '突击', image: 'https://example.com/baptiste.jpg' },
        { name: '死神', role: '突击', image: 'https://example.com/reaper.jpg' },
        { name: '艾什', role: '突击', image: 'https://example.com/ash.jpg' },
        { name: '巴蒂斯特', role: '支援', image: 'https://example.com/baptiste.jpg' },
        { name: '天使', role: '支援', image: 'https://example.com/angel.jpg' },
        { name: '禅雅塔', role: '支援', image: 'https://example.com/zenyatta.jpg' },
        { name: '安娜', role: '支援', image: 'https://example.com/ana.jpg' },
        { name: '布里吉塔', role: '支援', image: 'https://example.com/brigitte.jpg' },
        { name: '莫伊拉', role: '支援', image: 'https://example.com/moira.jpg' },
        { name: '卢西奥', role: '支援', image: 'https://example.com/lucio.jpg' },
        { name: 'D.Va', role: '坦克', image: 'https://example.com/dva.jpg' },
        { name: '温斯顿', role: '坦克', image: 'https://example.com/winston.jpg' },
        { name: '莱因哈特', role: '坦克', image: 'https://example.com/reinhardt.jpg' },
        { name: '奥丽莎', role: '坦克', image: 'https://example.com/orisa.jpg' },
        { name: '渣客镇女王', role: '坦克', image: 'https://example.com/junkqueen.jpg' },
        { name: '西格玛', role: '坦克', image: 'https://example.com/sigma.jpg' },
        { name: '破坏球', role: '坦克', image: 'https://example.com/junkrat.jpg' },
        { name: '路霸', role: '坦克', image: 'https://example.com/roadhog.jpg' },
        { name: '托比昂', role: '坦克', image: 'https://example.com/torbjorn.jpg' },
        { name: '美', role: '支援', image: 'https://example.com/mei.jpg' }
    ];

    const heroSection = document.querySelector('.hero-cards');

    heroes.forEach(hero => {
        const card = document.createElement('div');
        card.className = 'hero-card';
        card.innerHTML = `
<img src="${hero.image}" alt="${hero.name}" style="width:100%;">
<h3>${hero.name}</h3>
<p>角色类型: ${hero.role}</p>
        `;
        heroSection.appendChild(card);
    });
});