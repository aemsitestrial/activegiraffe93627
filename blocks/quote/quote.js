export default function decorate(block) {
  const [quoteWrapper] = block.children;

  // eslint-disable-next-line quotes
  const blockquote = document.createElement("blockquote");
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);
}
