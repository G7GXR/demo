// JavaScript source code
document.addEventListener('DOMContentLoaded', function () {
    const heroes = [
        { name: 'ʿ��76', role: 'ͻ��', image: 'https://example.com/soldier76.jpg' },
        { name: '����֮ӥ', role: 'ͻ��', image: 'https://example.com/pharah.jpg' },
        { name: '�Կ�', role: 'ͻ��', image: 'https://example.com/tracer.jpg' },
        { name: '�ڰٺ�', role: 'ͻ��', image: 'https://example.com/widowmaker.jpg' },
        { name: '���', role: 'ͻ��', image: 'https://example.com/hanzo.jpg' },
        { name: '�����', role: 'ͻ��', image: 'https://example.com/mccree.jpg' },
        { name: '����', role: 'ͻ��', image: 'https://example.com/echo.jpg' },
        { name: '���ܶ�', role: 'ͻ��', image: 'https://example.com/sojourn.jpg' },
        { name: 'Դ��', role: 'ͻ��', image: 'https://example.com/genji.jpg' },
        { name: '������', role: 'ͻ��', image: 'https://example.com/baptiste.jpg' },
        { name: '����', role: 'ͻ��', image: 'https://example.com/reaper.jpg' },
        { name: '��ʲ', role: 'ͻ��', image: 'https://example.com/ash.jpg' },
        { name: '�͵�˹��', role: '֧Ԯ', image: 'https://example.com/baptiste.jpg' },
        { name: '��ʹ', role: '֧Ԯ', image: 'https://example.com/angel.jpg' },
        { name: '������', role: '֧Ԯ', image: 'https://example.com/zenyatta.jpg' },
        { name: '����', role: '֧Ԯ', image: 'https://example.com/ana.jpg' },
        { name: '���Ｊ��', role: '֧Ԯ', image: 'https://example.com/brigitte.jpg' },
        { name: 'Ī����', role: '֧Ԯ', image: 'https://example.com/moira.jpg' },
        { name: '¬����', role: '֧Ԯ', image: 'https://example.com/lucio.jpg' },
        { name: 'D.Va', role: '̹��', image: 'https://example.com/dva.jpg' },
        { name: '��˹��', role: '̹��', image: 'https://example.com/winston.jpg' },
        { name: '�������', role: '̹��', image: 'https://example.com/reinhardt.jpg' },
        { name: '����ɯ', role: '̹��', image: 'https://example.com/orisa.jpg' },
        { name: '������Ů��', role: '̹��', image: 'https://example.com/junkqueen.jpg' },
        { name: '������', role: '̹��', image: 'https://example.com/sigma.jpg' },
        { name: '�ƻ���', role: '̹��', image: 'https://example.com/junkrat.jpg' },
        { name: '·��', role: '̹��', image: 'https://example.com/roadhog.jpg' },
        { name: '�бȰ�', role: '̹��', image: 'https://example.com/torbjorn.jpg' },
        { name: '��', role: '֧Ԯ', image: 'https://example.com/mei.jpg' }
    ];

    const heroSection = document.querySelector('.hero-cards');

    heroes.forEach(hero => {
        const card = document.createElement('div');
        card.className = 'hero-card';
        card.innerHTML = `
<img src="${hero.image}" alt="${hero.name}" style="width:100%;">
<h3>${hero.name}</h3>
<p>��ɫ����: ${hero.role}</p>
        `;
        heroSection.appendChild(card);
    });
});