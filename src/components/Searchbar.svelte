
<script>
	import { fetchAll } from "../utils/fetchAll";

	let searchValue = "";
	let words = [];
	let isVisible = true;

	async function handleSearch() {
		if(searchValue != "") {
			words = await fetchAll(searchValue);
		} else {
			words = "";
		}
    }

	const showResult = () => isVisible = true
	const HideResult = () => isVisible = false
	const handleClickLink = () => window.location.replace('/' + words[0].slug + '/definition')
</script>

<div class="relative w-1/3">
	<label for="searchInput" class="mb-2 text-sm font-medium text-light-primary sr-only dark:text-dark-primary"> Rechercher dans le dictionnaire</label>
	<form on:submit|preventDefault={handleClickLink} class="flex justify-between items-center pl-4 pr-2 py-2 border border-light-border dark:border-dark-border rounded-lg text-light-primary dark:text-dark-primary">
		<input
			type="text"
			id="searchInput"
			class="w-full text-header placeholder:font-normal border-0 ring-0 outline-0"
			placeholder="Rechercher dans le dictionnaire …"
			required
			bind:value={searchValue}
			on:input={handleSearch}
			on:focus={showResult}
			on:blur={HideResult}
		/>

		<button
			type="button"
			class="px-4 w-12 h-8 rounded-md flex justify-center items-center text-light-background bg-light-ternary hover:bg-light-secondary dark:bg-dark-ternary dark:hover:bg-dark-secondary transition-colors duration-200"
			on:click={handleClickLink}>
			<img src="/assets/search.svg" class="h-6 w-6 fill-dark-primary" alt="" />
		</button>
	</form>
	{#if words.length > 0 && words != null && isVisible}
		<ul class="absolute bg-light-base flex flex-col w-full p-2 shadow-sm border border-light-border top-14 rounded-lg" >
			{#each words as word}
				<li>
					<a href={`/${word.slug}/definition`} class="searchbar-link flex text-lg hover:bg-light-background hover:text-light-secondary px-2 leading-8 rounded">{word.abreviation ? word.abreviation + " (" + word.entree + ") ": word.entree}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
