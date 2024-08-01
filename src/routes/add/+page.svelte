<script lang="ts">
  import showdown from "showdown";
  export let data;
  var converter = new showdown.Converter();
  showdown.setOption('omitExtraWLInCodeBlocks', true)
  showdown.setOption('customizedHeaderId', true)
  showdown.setOption('simplifiedAutoLink', true)
  showdown.setOption('literalMidWordUnderscores', true)
  showdown.setOption('strikethrough', true)
  showdown.setOption('tables', true)
  showdown.setOption('smoothLivePreview', true)
  showdown.setOption('simpleLineBreaks', true)
  var placeholderText = "Type *your* __post__ in ~~markdown~~ [here](https://startpage.com)"
  let markdown;
  $: parsedMarkdownToHtml = markdown ? converter.makeHtml(markdown) : converter.makeHtml(placeholderText);
</script>

<h1 class="mt-8 text-4xl font-semibold">
  Add new post
</h1>

<form class="mt-4 flex flex-col justify-center items-center content-center">
  <div class="flex flex-row gap-16 h-[75svh]">
    <div class="bg-white rounded-md w-[60ch] overflow-hidden">
      <span class="text-2xl flex justify-center items-center text-black/25 select-none">Markdown</span>
      <textarea class="text-black px-2 py-1 w-full h-full resize-none" bind:value={markdown} placeholder={placeholderText}/>
    </div>
    
    <div class="text-white w-[60ch] resize-none rounded-md bg-neutral-950 text-pretty break-all" disabled>
      <span class="text-2xl flex justify-center items-center text-white/25 select-none">HTML Preview</span>
      <div class="px-2 py-1 h-full w-full">
        {parsedMarkdownToHtml || ""}
      </div>
    </div>
  </div>
  
  <h2 class="mt-8 text-xl">Category:</h2>
  <select class="mt-2 text-black rounded-md py-1 px-2 w-fit">
    {#each data.tags.rows as category}
      <option value={category.name} class={category.color}>{category.name}</option>
    {/each}
  </select>
  <button type="submit" class="mt-14 text-xl font-medium bg-white text-black hover:bg-black hover:text-white transition-all duration-200 shadow-md rounded-md px-16 py-2">Submit</button>
</form>
