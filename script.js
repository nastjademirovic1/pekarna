// Začasne fotografije: zamenjajte URL-je s svojimi slikami izdelkov.
const photos = {
 bread:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
 rolls:'https://images.unsplash.com/photo-1608198093002-ad4e005484df?auto=format&fit=crop&w=700&q=80',
 croissant:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80',
 sweet:'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=700&q=80',
 donut:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80',
 savory:'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=700&q=80',
 drink:'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80',
 coffee:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80'
};
const groups=[
 ['Kruh',[['Beli kruh','bread'],['Domači kruh','bread'],['Polbeli kruh','bread']]],
 ['Pekovski izdelki',[['Žemlje','rolls'],['Lepinje','bread'],['Rogljički','croissant']]],
 ['Sladke dobrote',[['Navadni rogljički','croissant'],['Čokoladni rogljički','croissant'],['Marmeladni rogljički','sweet'],['Krofi','donut']]],
 ['Slane dobrote',[['Mesni burek','savory'],['Sirni burek','savory'],['Štručke s sirom','rolls'],['Pecivo s hrenovko','savory']]],
 ['Pijača',[['Jogurt','drink'],['Voda','drink'],['Sokovi','drink'],['Kava','coffee'],['Ayran','drink']]]
];
const root=document.getElementById('product-groups');
groups.forEach(([name,items])=>{const section=document.createElement('section');section.className='category';const heading=document.createElement('div');heading.className='category-heading';const h=document.createElement('h3');h.textContent=name.toLocaleUpperCase('sl');heading.append(h);section.append(heading);const grid=document.createElement('div');grid.className='product-grid';items.forEach(([label,key])=>{const card=document.createElement('article');card.className='product-card';const img=document.createElement('img');img.src=photos[key];img.alt=`Ilustrativna fotografija: ${label.toLocaleLowerCase('sl')}`;img.loading='lazy';img.decoding='async';const title=document.createElement('h4');title.textContent=label;card.append(img,title);grid.append(card)});section.append(grid);root.append(section)});
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Zapri meni':'Odpri meni')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Odpri meni')}));document.getElementById('year').textContent=new Date().getFullYear();
