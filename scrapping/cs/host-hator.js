document.querySelectorAll('.user-card__name').forEach(el => {
	const fullNames = el.innerText.split(' ');
	if (fullNames.length > 1) {
		fullNames.pop();
	};
	console.log(fullNames.join(' '));
})

function printTxt(name) {
	return `Hola ${name},
My friend Pier and I will spend some days in Berlin before heading north towards Fusion Festival. This is the second time I'm using Couchsurfing on a trip after hosting many people and doing it in Turkey, resulting in an amazing experience. We'd like to travel getting in touch with local people but we won't really be intense guests in case u don't have much time to spend with us or show us around.
We can share spanish, italian, cooking, stories, music, smiles, silences, chats and good vibes among other things... we'd be happy to spend any amount of time in your place and can stay less than 3 nights if for any reason that is too much.
Hasta pronto!`
}

document.querySelectorAll('.user-card__name').forEach(el => el.onmouseover = () => {
	const fullName = el.innerText.split(' ');
	if (fullName.length > 1) {
		fullName.pop();
	};
	console.log(printTxt(fullName.join(' ')));
});