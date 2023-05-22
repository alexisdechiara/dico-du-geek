<script>
	import { fetchAll } from "../utils/fetchAll";
	import { clickOutside } from "../utils/clickOutside.ts";
	export let size = "md";

	let searchValue = "";
	let words = [];
	let isVisible = true;
	let formClass, inputClass, buttonClass, linkClass, listClass, iconClass;

	const sizeClasses = {
		lg: {
			formClass: "pr-3 py-1 rounded-xl",
			inputClass: "px-4 py-4 font-medium text-lg md:text-xl lg:text-2xl rounded-xl placeholder:font-medium",
			buttonClass: "px-6 rounded-[11px]",
			linkClass: "text-2xl leading-10 py-2 px-3",
			listClass: "top-20 rounded-xl",
			iconClass: "h-6",
		},
		sm: {
			formClass: "pr-2 rounded-lg",
			inputClass: "pl-3 py-2 font-medium text-sm md:text-md lg:text-lg rounded-lg",
			buttonClass: "px-4 w-12 h-8 rounded-md",
			linkClass: "text-lg leading-8 px-2",
		},
		default: {
			formClass: "pr-2 py-1 rounded-lg",
			inputClass: "pl-3 py-2 font-medium text-sm md:text-md lg:text-lg rounded-lg",
			buttonClass: "h-8 rounded-md",
			linkClass: "text-lg leading-8 px-2",
			listClass: "top-14 rounded-lg",
			iconClass: "h-4",
		},
	};

	if (sizeClasses.hasOwnProperty(size)) {
		({ formClass, inputClass, buttonClass, linkClass, listClass, iconClass } = sizeClasses[size]);
	} else {
		({ formClass, inputClass, buttonClass, linkClass, listClass, iconClass } = sizeClasses.default);
	}

	async function handleSearch() {
		if (searchValue !== "") {
			words = await fetchAll(searchValue);
		} else {
			words = [];
		}
	}

	const showScrollBar = () => {
		document.body.classList.remove("overflow-y-hidden");
		if (document.body.scrollHeight > document.body.clientHeight) {
			document.body.classList.remove("mr-[15px]");
		}
	};

	const hideScrollBar = () => {
		document.body.classList.add("overflow-y-hidden");
		if (document.body.scrollHeight > document.body.clientHeight) {
			document.body.classList.add("mr-[15px]");
		}
	};

	const showResult = () => {
		isVisible = true;
	};

	const HideResult = () => {
		isVisible = false;
	};

	const handleClickLink = () => window.location.replace(`/${words[0].slug}/definition`);

	const handleSearchFocus = () => {
		showResult();
		showScrollBar();
	};

	let selectedLink = -1;

	function handleKeydown(event) {
		if (isVisible && words && words.length > 0) {
			let links = document.getElementsByClassName("searchbar-link");
			if (event.key === "ArrowDown") {
				hideScrollBar();
				selectedLink = selectedLink < links.length - 1 ? selectedLink + 1 : 0;
				links[selectedLink].focus();
			} else if (event.key === "ArrowUp") {
				hideScrollBar();
				selectedLink = selectedLink > 0 ? selectedLink - 1 : links.length - 1;
				links[selectedLink].focus();
			} else {
				showScrollBar();
			}
		}
		if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "Enter" && event.key !== "Tab") {
			window.document.getElementById("searchInput").focus();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<div use:clickOutside on:click_outside={HideResult} class="relative grow {size === 'lg' ? 'w-full' : 'w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'}">
	<label for="searchInput" class="mb-2 text-sm font-medium text-primary sr-only"> Rechercher dans le dictionnaire</label>
	<form on:submit|preventDefault={handleClickLink} class="flex justify-between items-center bg-base border border-border text-primary {formClass}">
		<input
			type="text"
			id="searchInput"
			class="w-full placeholder:font-normal border-0 ring-0 outline-0 bg-inherit text-inherit text-ellipsis {inputClass}"
			placeholder="Rechercher dans le dictionnaire …"
			required
			bind:value={searchValue}
			on:input={handleSearch}
			on:focus={handleSearchFocus}
		/>

		<button
			type="submit"
			aria-label="rechercher"
			class="flex aspect-[3/2] justify-center items-center text-background bg-ternary hover:bg-secondary transition-colors {buttonClass}"
			on:click={handleClickLink}
		>
			<svg xmlns="http://www.w3.org/2000/svg" fill="inherit" id="Outline" viewBox="0 0 24 24" class="fill-background {iconClass}"
				><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" /></svg
			>
		</button>
	</form>
	{#if isVisible && words && words.length > 0}
		<ul class="absolute z-50 bg-base flex flex-col w-full p-2 shadow-sm border border-border {listClass}">
			{#each words as word}
				<li>
					<a
						href={`/${word.slug}`}
						class="searchbar-link flex text-primary focus:bg-background focus:text-secondary focus:dark-text-dark-secondary hover:bg-background hover:text-secondary hover:dark-text-dark-secondary rounded-md {linkClass}"
						>{word.abbreviation ? word.abbreviation + " (" + word.entry + ") " : word.entry}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>
