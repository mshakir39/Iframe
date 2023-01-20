<script>
	export let data = {
		imgSrc: '',
		name: '',
		designation: '',
		date: ''
	};
	const { imgSrc, name, designation, date } = data;
</script>

<div class="flex justify-center sm:justify-start">
	<img class="rounded-full mr-4 w-16 h-16" src={imgSrc} alt="" />
	<div class="flex flex-col">
		<span class="font-bold">{name}</span>
		<span>{designation}</span>
		<span>{date}</span>
	</div>
</div>
