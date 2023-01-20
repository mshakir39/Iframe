<script>
	import { selectedFont, screenType, primaryColor } from '../../Store/store';
	import Profile from '../Profile/profile.svelte';
</script>

<div class="flex justify-center">
	<div
		class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 {$screenType}"
		style="font-family:{$selectedFont};"
	>
		<div class="flex justify-center px-4 mx-auto max-w-screen-xl " style="">
			<div class="max-w-2xl">
				<header class="mb-4 lg:mb-6 not-format">
					<div class="inline-flex  mr-3 text-sm text-gray-900 dark:text-white flex-col ">
						<Profile
							data={{
								imgSrc: 'Images/myProfile.jpg',
								name: 'Muzamil Shakir',
								designation: 'Frontend Engineer',
								date: '2 jan 2023'
							}}
						/>
						<button class="btn w-4/12   mt-4  mb-2  {$primaryColor}">
							<a
								href="https://github.com/mshakir39/portfolio/blob/main/cv/Updated%20CV%20(1).pdf"
								style="color:white">Download Resume</a
							></button
						>

						<span class="mb-4 mt-4 text-3xl  text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
							Best practices for successful prototypes</span
						>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet. Aliquam
							eleifend mi in nulla posuere. Ut aliquam purus sit amet. Adipiscing tristique risus
							nec feugiat in fermentum posuere urna nec. Purus semper eget duis at tellus at urna.
							Diam maecenas sed enim ut sem viverra aliquet eget. Commodo odio aenean sed adipiscing
							diam. Morbi tristique senectus et netus et malesuada fames. Ante in nibh mauris cursus
							mattis. Senectus et netus et malesuada fames ac turpis egestas. Pretium fusce id velit
							ut tortor pretium viverra. Morbi blandit cursus risus at. Vel pretium lectus quam id.<br
							/>

							Nibh sed pulvinar proin gravida hendrerit lectus. Nisl nisi scelerisque eu ultrices
							vitae. Sit amet nulla facilisi morbi. Tempus iaculis urna id volutpat. Amet justo
							donec enim diam. Imperdiet massa tincidunt nunc pulvinar sapien et. Hendrerit gravida
							rutrum quisque non. Etiam non quam lacus suspendisse. Viverra nibh cras pulvinar
							mattis nunc. Consectetur adipiscing elit pellentesque habitant morbi tristique. Enim
							sit amet venenatis urna cursus eget. Commodo odio aenean sed adipiscing diam donec
							adipiscing tristique risus. Imperdiet dui accumsan sit amet nulla facilisi. Amet est
							placerat in egestas. Nunc aliquet bibendum enim facilisis gravida neque convallis a
							cras. Dui id ornare arcu odio ut sem. Vulputate dignissim suspendisse in est ante in
							nibh mauris cursus. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Congue
							nisi vitae suscipit tellus. Sed viverra tellus in hac habitasse platea.<br />

							Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Eget sit amet
							tellus cras adipiscing. Amet tellus cras adipiscing enim eu turpis egestas pretium
							aenean. Integer quis auctor elit sed vulputate mi sit amet mauris. Ac odio tempor orci
							dapibus ultrices in. Suspendisse potenti nullam ac tortor vitae purus. A scelerisque
							purus semper eget. Sit amet consectetur adipiscing elit. Ullamcorper morbi tincidunt
							ornare massa eget egestas purus viverra. Diam vel quam elementum pulvinar etiam non.
							Egestas purus viverra accumsan in. Vitae suscipit tellus mauris a diam maecenas sed.
							Auctor neque vitae tempus quam pellentesque nec nam. Faucibus interdum posuere lorem
							ipsum dolor sit amet consectetur adipiscing. Aliquet sagittis id consectetur purus ut
							faucibus. Magnis dis parturient montes nascetur ridiculus mus. Et tortor consequat id
							porta. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.<br />

							Tellus orci ac auctor augue mauris. Nec tincidunt praesent semper feugiat. Semper
							auctor neque vitae tempus quam pellentesque. Posuere morbi leo urna molestie at.
							Mattis nunc sed blandit libero. Pretium nibh ipsum consequat nisl. Quam lacus
							suspendisse faucibus interdum posuere lorem ipsum dolor. Sit amet venenatis urna
							cursus eget. Ut pharetra sit amet aliquam id diam maecenas ultricies. Sed viverra
							ipsum nunc aliquet. Mauris ultrices eros in cursus. Curabitur gravida arcu ac tortor.
							Aenean sed adipiscing diam donec adipiscing tristique. Tellus orci ac auctor augue.
							Pretium vulputate sapien nec sagittis. Morbi tincidunt ornare massa eget egestas.
							Viverra mauris in aliquam sem. Imperdiet dui accumsan sit amet nulla facilisi. Porta
							nibh venenatis cras sed felis eget velit.<br />

							Tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu mi bibendum neque
							egestas congue quisque egestas. Sed enim ut sem viverra. Pellentesque adipiscing
							commodo elit at imperdiet dui. Nunc sed velit dignissim sodales ut eu sem integer
							vitae. Tempus egestas sed sed risus pretium quam vulputate dignissim. Facilisi nullam
							vehicula ipsum a arcu. Dignissim cras tincidunt lobortis feugiat vivamus at. Porttitor
							massa id neque aliquam vestibulum morbi blandit. Quisque non tellus orci ac. Amet
							volutpat consequat mauris nunc congue nisi. Imperdiet massa tincidunt nunc pulvinar
							sapien et ligula. Amet massa vitae tortor condimentum. At risus viverra adipiscing at
							in tellus integer feugiat. Semper risus in hendrerit gravida rutrum. Eget aliquet nibh
							praesent tristique magna sit.
						</p>
					</div>
				</header>
			</div>
		</div>
	</div>
</div>
