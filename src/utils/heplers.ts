/* eslint-disable @typescript-eslint/no-explicit-any */
export const stripHtmlTags = (html: string) => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  console.log(html );
  let textContent = tmp.textContent || tmp.innerText || '';

  // Remove ellipsis sequences (encoded or not) and any surrounding square brackets
  textContent = textContent.replace(/(\[&hellip;\]|\u2026|\[.*?\])/g, '');

  return textContent;
};

export const scrollDown = (pixels: number) => {
  window.scrollBy({ top: pixels, behavior: 'smooth' });
};

export default scrollDown;
