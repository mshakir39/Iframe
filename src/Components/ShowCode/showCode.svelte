<script>
	import hljs from 'highlight.js';
	import { storeTab } from './../../Store/store.js';
	import 'highlight.js/styles/github-dark.css';
	import { TabGroup, Tab, AppBar, CodeBlock } from '@skeletonlabs/skeleton';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	storeHighlightJs.set(hljs);
	const codeFiles = [
		'page.svelte',
		'bogSection.svelte',
		'showCode.svelte',
		'Store.js',
		'Static.js',
		'layout.svelte',
		'Profile.svelte'
	];
</script>

<AppBar>
	<TabGroup selected={storeTab}>
		{#each codeFiles as file}
			<Tab value={file}>{file}</Tab>
		{/each}
	</TabGroup>

	<!-- Conditionally display content -->
	{#if $storeTab === 'page.svelte'}<CodeBlock
			language="html"
			code={`
    import {showCode} from "../../Store/store"
    import ShowCode from '../../Components/ShowCode/showCode.svelte';
    import BlogSection from '../../Components/BlogSection/blogSection.svelte';

            {#if $showCode===true}
            <ShowCode/>
            {:else}
            <BlogSection/>
            {/if}
            
            `}
		/>{/if}
	{#if $storeTab === 'bogSection.svelte'}<CodeBlock
			language="html"
			code={`
            
<div class="flex justify-center">
	<div
		class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900"
		style="font-family:{$selectedFont};width:{$screenType}"
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
						<button class="btn  md:w-4/12  sm:w-3/12 mt-4  mb-2  {$primaryColor}">
							<a
								href="https://github.com/mshakir39/portfolio/blob/main/cv/Updated%20CV%20(1).pdf"
								style="color:white">Download Resume</a
							></button
						>

						<span class="mb-4 mt-4 text-3xl  text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
							What Do I Do</span
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
            `}
		/>{/if}
	{#if $storeTab === 'Store.js'}<CodeBlock
			language="javascript"
			code={`
      import { writable } from "svelte/store"
export const selectedFont = writable("");
export const screenType = writable("")
export const storeTab = writable('a');
export const showCode = writable(false);
            `}
		/>{/if}
	{#if $storeTab === 'Static.js'}<CodeBlock
			language="javascript"
			code={`
export const resposiveBtns = [
    {
        svgPath:
            'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        size: '1280px'
    },
    {
        svgPath: 'M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
        size: '768px'
    },
    {
        svgPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
        size: '480px'
    },
    {
        svgPath: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14',
        size: '-webkit-fill-available'
    }
];
export const primaryColors = [
    {
        color: 'pink',
        class: 'inline-block w-6 h-4 rounded mr-2 bg-pink-600 dark:bg-pink-400',
        id: 'bg-pink-600'
    },
    {
        color: 'purple',
        class: 'inline-block w-6 h-4 rounded mr-2 bg-purple-600 dark:bg-purple-400',
        id: 'bg-purple-600'
    },
    {
        color: 'fuchsia',
        class: 'inline-block w-6 h-4 rounded mr-2 bg-fuchsia-600 dark:bg-fuchsia-400',
        id: 'bg-fuchsia-600'
    }
];
            `}
		/>{/if}
	{#if $storeTab === 'Profile.svelte'}<CodeBlock
			language="html"
			code={`
<div class="flex">
	<img class="rounded-full mr-4 w-16 h-16" src={imgSrc} alt="" />
	<div class="flex flex-col">
		<span class="font-bold">{name}</span>
		<span>{designation}</span>
		<span>{date}</span>
	</div>
</div>

        `}
		/>{/if}
	{#if $storeTab === 'showCode.svelte'}<CodeBlock
			language="html"
			code={`
<AppBar>
	<TabGroup selected={storeTab}>
		{#each codeFiles as file}
			<Tab value={file}>{file}</Tab>
		{/each}
	</TabGroup>
</AppBar>
            `}
		/>{/if}
	{#if $storeTab === 'layout.svelte'}<CodeBlock
			language="html"
			code={`
  
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Tailwind Test</strong>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<div class="flex ">
					<div class="flex w-[55%] items-center justify-between ">
						<div>
							<button class="btn bg-white rounded-xl" on:click={() => showCode.set(!$showCode)}>
								{#if $showCode === true}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										aria-hidden="true"
										class="w-4 h-4 mr-2"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/><path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/></svg
									>
								{:else}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										aria-hidden="true"
										class="w-4 h-4 mr-2"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										/></svg
									>
								{/if}
							</button>
						</div>
						<div>
							<button
								class="bg-white btn rounded-xl"
								id="1200px"
								on:click={() => screenType.set('1200px')}
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									class="w-4 h-4"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/></svg
								></button
							>
							<button
								class="bg-white btn rounded-xl"
								id="768px"
								on:click={() => screenType.set('768px')}
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									class="w-4 h-4"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
									/></svg
								></button
							>
							<button
								class="bg-white btn rounded-xl"
								id="480px"
								on:click={() => screenType.set('480px')}
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									class="w-4 h-4"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
									/></svg
								></button
							>
							<button
								class="bg-white btn rounded-xl"
								id="-webkit-fill-available"
								on:click={() => screenType.set('-webkit-fill-available')}
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									class="w-4 h-4 mr-2"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/></svg
								>Full Screen</button
							>
						</div>
					</div>
					<div class="w-[45%] flex justify-end items-center">
						<select
							id="color"
							bind:value={fonts}
							on:change={(e) => selectedFont.set(e.target.value)}
							style="width: max-content;border-radius:12px"
						>
							{#each font_family as option}
								<option>{option}</option>
							{/each}
						</select>
						<span class="relative">
							<button use:menu={{ menu: 'example' }} class="btn bg-white rounded-xl">
								Primary Color</button
							>
							<div data-menu="example" class="flex-col   bg-white shadow-md  rounded-sm w-full">
								<span> asd </span>
								<span> asdwq </span>
								<span> asd </span>
								<span> asdwq </span>
								<span> asd </span>
								<span> asdwq </span>
							</div>
						</span>
						<LightSwitch />
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={storeValue}>
			<svelte:fragment slot="default">
				<a data-sveltekit-preload-data="hover" href="/tailwind">
					<AppRailTile label="Tailwind" tag="btn" class="cursor-pointer" value={7}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 500 501"
							class="svg-icon fill-token inline-block outline-none fill-current w-6 h-6 "
							focusable="false"
							data-testid="svg-icon"
						>
							<path
								d="M28.125 18.2266C56.8262 -5.87403 97.3242 -3.25001 124.121 17.0644C152.637 -3.35645 192.773 -5.68556 221.973 18.0117L222.266 18.2851C257.422 47.8848 259.18 100.609 227.344 132.445L150.586 209.398C136.816 222.777 113.672 223.754 99.3164 209.008L22.6465 132.543L22.6075 132.445C-9.2197 99.7305 -7.49411 47.8164 28.125 18.2266ZM58.1153 54.2519C43.877 66.0586 43.2618 86.8105 55.7813 99.3398L125.195 168.578L194.141 99.3398C206.738 86.8301 206.055 66.0879 192.285 54.2812C180.371 44.7988 161.621 45.8535 149.414 57.5918L125.586 83.0898L100.684 57.7773C88.2813 45.6387 69.1114 44.9941 58.252 54.1445L58.1153 54.2519ZM462.305 254.027C468.164 258.227 470.41 266.039 467.48 272.777L429.98 360.375H484.375C490.918 360.375 496.68 364.379 498.145 370.531C501.27 376.586 499.609 383.52 494.629 387.719L369.629 497.094C364.16 501.098 356.055 502.27 350.195 497.973C344.336 493.773 342.188 485.961 345.02 479.223L382.52 391.625H328.125C321.582 391.625 315.82 387.621 313.477 381.469C311.23 375.414 312.891 368.48 317.871 363.402L442.871 254.027C448.34 250.023 456.445 249.73 462.305 254.027Z"
							/>
							<path
								d="M414.013 1.40712C425.27 3.65856 432.587 14.6127 430.335 25.8698L429.34 30.8057C427.045 42.3659 422.802 53.3633 416.87 63.3649H479.218C490.691 63.3649 500 72.6737 500 84.1473C500 95.1014 491.557 104.064 480.82 104.887C484.153 108.567 486.145 113.459 486.145 118.785C486.145 128.916 478.871 137.359 469.303 139.178C471.208 142.295 472.29 146.018 472.29 149.958C472.29 159.181 466.272 167.017 457.959 169.702C458.262 171.131 458.435 172.646 458.435 174.205C458.435 185.678 449.126 194.987 437.653 194.987H405.829C397.603 194.987 389.593 192.563 382.752 188.016L366.083 176.889C354.523 169.182 347.595 156.193 347.595 142.295V94.1489C347.595 81.5062 353.354 69.5996 363.182 61.6763L366.386 59.1218C377.86 49.9428 385.696 37.0404 388.554 22.6659L389.55 17.73C391.801 6.47285 402.755 -0.844312 414.013 1.40712ZM292.175 70.2924H319.885C327.549 70.2924 333.74 76.4838 333.74 84.1473V181.132C333.74 188.796 327.549 194.987 319.885 194.987H292.175C284.512 194.987 278.32 188.796 278.32 181.132V84.1473C278.32 76.4838 284.512 70.2924 292.175 70.2924Z"
							/>
							<path
								d="M214.172 471.459C214.172 475.531 210.859 478.844 206.787 478.844H184.631V441.918H162.48L162.476 478.844H73.8525V323.754H29.541C13.2242 323.754 0 337.001 0 353.295V471.459C0 487.776 13.2242 501 29.541 501H206.787C223.104 501 236.328 487.776 236.328 471.459L236.332 441.918H214.172V471.459ZM51.6968 478.844H29.541C25.469 478.844 22.1558 475.531 22.1558 471.459V449.303H51.6968V478.844ZM51.6968 427.148H22.1558V397.607H51.6968V427.148ZM51.6968 375.451H22.1558V353.295C22.1558 349.223 25.469 345.91 29.541 345.91H51.6968V375.451ZM265.869 264.672H118.164C101.87 264.672 88.623 277.896 88.623 294.213V397.607C88.623 413.923 101.847 427.148 118.164 427.148H265.869C282.186 427.148 295.41 413.923 295.41 397.607V294.213C295.41 277.896 282.163 264.672 265.869 264.672ZM273.254 397.607C273.254 401.679 269.941 404.992 265.869 404.992L215.419 330.724C214.034 328.693 211.726 327.447 209.233 327.447C206.763 327.447 204.456 328.68 203.09 330.735L174.13 374.175L163.814 360.023C162.429 358.095 160.214 356.988 157.444 356.988C155.086 356.988 152.868 358.114 151.476 360.022L118.164 404.992C114.102 404.992 110.779 401.668 110.779 397.607V294.213C110.779 290.141 114.092 286.828 118.164 286.828H265.869C269.941 286.828 273.254 290.141 273.254 294.213V397.607ZM139.904 301.598C131.748 301.598 125.134 308.213 125.134 316.369C125.134 324.525 131.748 331.139 139.904 331.139C148.065 331.139 154.675 324.525 154.675 316.369C154.675 308.213 148.49 301.598 139.904 301.598Z"
							/>
						</svg>
					</AppRailTile>
				</a>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>

	<svelte:fragment slot="sidebarRight" />
	<svelte:fragment slot="pageHeader" />
	<slot />
	<svelte:fragment slot="pageFooter" />
</AppShell>

        `}
		/>{/if}
</AppBar>
