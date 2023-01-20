<script>
    import {showCode} from "../../Store/store"
    import ShowCode from '../../Components/ShowCode/showCode.svelte';
    import BlogSection from '../../Components/BlogSection/blogSection.svelte';
</script>

{#if $showCode===true}
<ShowCode/>
{:else}
<BlogSection/>
{/if}

