<script>
	import { fetchAll } from "../utils/fetchAll";
	export let size = "md";

	let searchValue = "";
	let words = [];
	let isVisible = true;
	let formClass, inputClass, buttonClass, linkClass, listClass, iconClass;

	if (size === "lg") {
		formClass = "pr-3 rounded-xl";
		inputClass = "pl-3 py-4 font-medium text-lg md:text-xl lg:text-2xl rounded-xl";
		buttonClass = "px-6 rounded-[11px]";
		linkClass = "text-2xl leading-10 py-2 px-3";
		listClass = "top-20 rounded-xl";
		iconClass = "h-6";
	} else if (size === "sm") {
		formClass = "pr-2 rounded-lg";
		inputClass = "pl-3 py-2 font-medium text-sm md:text-md lg:text-lg rounded-lg";
		buttonClass = "px-4 w-12 h-8 rounded-md";
		linkClass = "text-lg leading-8 px-2";
	} else {
		formClass = "pr-2 rounded-lg";
		inputClass = "pl-3 py-2 font-medium text-sm md:text-md lg:text-lg rounded-lg";
		buttonClass = "h-8 rounded-md";
		linkClass = "text-lg leading-8 px-2";
		listClass = "top-14 rounded-lg";
		iconClass = "h-4";
	}

	async function handleSearch() {
		if (searchValue != "") {
			words = await fetchAll(searchValue);
		} else {
			words = "";
		}
	}

	const showResult = () => (isVisible = true);
	const HideResult = () =>
		setTimeout(() => {
			isVisible = false;
		}, 100);
	const handleClickLink = () => window.location.replace("/" + words[0].slug + "/definition");
</script>

<div class="relative {size === 'lg' ? 'w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2' : 'w-1/3'}">
	<label for="searchInput" class="mb-2 text-sm font-medium text-light-primary sr-only dark:text-dark-primary"> Rechercher dans le dictionnaire</label>
	<form
		on:submit|preventDefault={handleClickLink}
		class="flex justify-between items-center bg-light-base dark:bg-dark-background border border-light-border dark:border-dark-border text-light-primary dark:text-dark-primary {formClass}"
	>
		<input
			type="text"
			id="searchInput"
			class="w-full placeholder:font-normal border-0 ring-0 outline-0 bg-inherit text-inherit {inputClass}"
			placeholder="Rechercher dans le dictionnaire …"
			required
			bind:value={searchValue}
			on:input={handleSearch}
			on:focus={showResult}
			on:blur={HideResult}
		/>

		<button
			type="submit"
			aria-label="rechercher"
			class="flex aspect-[3/2] justify-center items-center text-light-background dark:text-dark-background bg-light-ternary hover:bg-light-secondary dark:bg-light-bacground dark:hover:bg-light-ternary/75 transition-colors duration-200 {buttonClass}"
			on:click={handleClickLink}
		>
			<svg xmlns="http://www.w3.org/2000/svg" fill="inherit" id="Outline" viewBox="0 0 24 24" class="fill-light-background {iconClass}"
				><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" /></svg
			>
		</button>
	</form>
	{#if words.length > 0 && words != null && isVisible}
		<ul class="absolute bg-light-base dark:bg-dark-base flex flex-col w-full p-2 shadow-sm border border-light-border dark:border-dark-border {listClass}">
			{#each words as word}
				<li>
					<a
						href={`/${word.slug}/definition`}
						class="flex text-light-primary dark:text-dark-primary hover:bg-light-background hover:dark:bg-dark-background hover:text-light-secondary hover:dark-text-dark-secondary rounded {linkClass}"
						>{word.abreviation ? word.abreviation + " (" + word.entree + ") " : word.entree}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>
