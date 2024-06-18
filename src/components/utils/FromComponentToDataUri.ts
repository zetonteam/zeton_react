import { renderToStaticMarkup } from 'react-dom/server';
import { JSX } from 'react/jsx-runtime';

//interface IComponentToDataUrlBackgroundParser {}
type UrlStringToBackgroundCssType = string;

const ComponentToDataUrlBackgroundParser = (
  element: JSX.Element
): UrlStringToBackgroundCssType => {
  const svgStringFromJSXElementEncoded: string = encodeURIComponent(
    renderToStaticMarkup(element)
  );
  const dataStringUrlDecorated: string = `url("data:image/svg+xml,${svgStringFromJSXElementEncoded}") no-repeat center`;
  return dataStringUrlDecorated;
};

export default ComponentToDataUrlBackgroundParser;
