import React from "react";
import Svg, {
  Circle,
  Rect,
  Path,
  Defs,
  G,
  Symbol,
  Use,
  ClipPath,
} from "react-native-svg";

function Icon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="110"
      height="110"
      version="1.2"
      viewBox="0 0 375 375"
    >
      <Defs>
        <Symbol overflow="visible">
          <Path d="M20.422 0H2.532v-36.813h17.89zm-1.36-2.125v-32.547l-6.921 16.266zM3.892-34.359v31.937l6.78-15.984zm1.015 33h13.016l-6.516-15.329zm6.5-18.766l6.516-15.328H4.906zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph0-1" overflow="visible">
          <Path d="M31-30.672H19.719V0H12.14v-30.672H1.016v-6.14H31zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph0-2" overflow="visible">
          <Path d="M24.063-7.578H10.765L8.25 0H.172l13.703-36.813h7.031L34.688 0h-8.063zm-11.25-6.156h9.203L17.39-27.516zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph0-3" overflow="visible">
          <Path d="M13.203-36.813l9.453 26.704 9.407-26.703h9.953V0h-7.61v-10.063l.766-17.374L25.234 0h-5.203L10.11-27.406l.766 17.343V0H3.281v-36.813zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph0-4" overflow="visible">
          <Path d="M10.875-12.969V0H3.281v-36.813h14.36c2.77 0 5.203.508 7.297 1.516 2.101 1.012 3.718 2.45 4.843 4.313 1.133 1.867 1.703 3.984 1.703 6.359 0 3.605-1.242 6.45-3.718 8.531-2.47 2.086-5.887 3.125-10.25 3.125zm0-6.14h6.766c2.007 0 3.539-.473 4.593-1.422 1.051-.946 1.578-2.297 1.578-4.047 0-1.8-.53-3.258-1.593-4.375-1.063-1.113-2.528-1.688-4.39-1.719h-6.954zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph0-5" overflow="visible">
          <Path d="M10.875-6.094h16.11V0H3.28v-36.813h7.594zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph0-6" overflow="visible">
          <Path d="M33.531-17.578c0 3.625-.64 6.808-1.922 9.547-1.28 2.73-3.117 4.836-5.5 6.312C23.723-.239 20.99.5 17.906.5c-3.054 0-5.777-.727-8.172-2.188-2.398-1.468-4.25-3.562-5.562-6.28-1.313-2.727-1.98-5.864-2-9.407v-1.813c0-3.625.648-6.812 1.953-9.562 1.313-2.758 3.16-4.875 5.547-6.344 2.383-1.476 5.11-2.218 8.172-2.218 3.07 0 5.8.742 8.187 2.218 2.383 1.469 4.227 3.586 5.532 6.344 1.312 2.75 1.968 5.93 1.968 9.531zm-7.687-1.656c0-3.864-.696-6.797-2.078-8.797-1.387-2.008-3.36-3.016-5.922-3.016-2.543 0-4.508.992-5.89 2.969-1.376 1.98-2.075 4.883-2.095 8.703v1.797c0 3.762.688 6.68 2.063 8.75 1.383 2.074 3.379 3.11 5.984 3.11 2.54 0 4.492-.993 5.86-2.985 1.363-2 2.054-4.914 2.078-8.75zm-6.313-27.61H27.5L20.5-39h-5.953zm0 0"></Path>
        </Symbol>
        <Symbol overflow="visible">
          <Path d="M6.516 0H.812v-11.734h5.704zm-.438-.672v-10.375L3.875-5.859zM1.234-10.953V-.781L3.406-5.86zM1.563-.438h4.156L3.64-5.313zM3.64-6.405l2.078-4.89H1.562zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph1-1" overflow="visible">
          <Path d="M.469 0l2.047-11.734 3.046.015c.958 0 1.782.242 2.47.719.687.48 1.179 1.14 1.484 1.984.3.836.39 1.774.265 2.813l-.078.594c-.242 1.71-.906 3.074-2 4.093C6.617-.504 5.25 0 3.593 0zm3.328-10.453L2.203-1.266l1.5.016c1.133 0 2.098-.352 2.89-1.063.79-.718 1.305-1.69 1.548-2.921.187-.989.25-1.832.187-2.532-.086-.82-.36-1.468-.828-1.937-.469-.477-1.105-.727-1.906-.75zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph1-2" overflow="visible">
          <Path d="M5.578 0a2.29 2.29 0 01-.047-.453l.016-.469C4.742-.18 3.895.176 3 .156c-.762-.011-1.387-.25-1.875-.719-.48-.476-.7-1.078-.656-1.796.062-.914.469-1.633 1.219-2.157.75-.52 1.742-.78 2.984-.78l1.516.015.093-.703c.051-.52-.054-.93-.312-1.235-.25-.3-.633-.457-1.14-.468-.5-.008-.946.117-1.329.375-.375.25-.61.585-.703 1l-1.453.015c.039-.508.234-.96.578-1.36a3.54 3.54 0 011.344-.921 4.455 4.455 0 011.718-.313c.907.024 1.61.297 2.11.829.508.53.722 1.234.64 2.109l-.703 4.312-.047.625c-.011.293.02.586.094.875L7.062 0zM3.297-1.125c.469.012.91-.098 1.328-.328a3.479 3.479 0 001.078-.984l.313-1.797h-1.11c-.918 0-1.62.148-2.11.437-.491.281-.765.695-.827 1.235-.055.406.039.746.281 1.015.238.274.586.414 1.047.422zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph1-3" overflow="visible">
          <Path d="M5.64-2.36c.083-.6-.245-1.03-.984-1.28l-1.515-.438c-1.282-.438-1.899-1.164-1.844-2.188.031-.77.375-1.398 1.031-1.89.664-.489 1.453-.727 2.36-.719.875.012 1.585.266 2.14.766.55.5.817 1.156.797 1.968l-1.453-.015c.008-.438-.133-.79-.422-1.063-.281-.27-.656-.41-1.125-.422-.5-.007-.938.11-1.313.36-.335.25-.527.57-.578.953-.074.512.235.883.922 1.11l.735.202c1 .262 1.707.602 2.125 1.016.414.406.609.918.578 1.531a2.47 2.47 0 01-.532 1.422c-.324.399-.757.703-1.296.922a4.27 4.27 0 01-1.704.281C2.632.145 1.867-.117 1.267-.64.672-1.17.383-1.85.406-2.687H1.86c0 .492.157.886.47 1.187.312.293.737.438 1.28.438.532.011.989-.098 1.375-.329.383-.238.602-.562.657-.968zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph1-4" overflow="visible">
          <Path d="M2.969-7.656c.758-.832 1.64-1.239 2.64-1.219.813.012 1.414.293 1.813.844.394.554.539 1.324.437 2.312L6.906 0H5.453l.953-5.734a2.59 2.59 0 00.016-.735c-.094-.75-.54-1.133-1.328-1.156-.899-.02-1.668.45-2.313 1.406L1.703 0H.25l2.156-12.375H3.86zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph1-5" overflow="visible">
          <Path d="M8.156-4.313a6.768 6.768 0 01-.734 2.407c-.375.71-.836 1.234-1.375 1.578a3.245 3.245 0 01-1.813.5C3.18.148 2.398-.242 1.891-1.016L1.594 0H.25l2.156-12.375H3.86L2.984-7.75c.696-.77 1.547-1.145 2.547-1.125.832.023 1.485.328 1.953.922.47.594.711 1.418.735 2.469.008.343-.008.68-.047 1zm-1.375-.859c.008-.781-.125-1.379-.406-1.797-.273-.414-.7-.633-1.281-.656-.907-.02-1.672.438-2.297 1.375L2.14-2.453c.32.887.925 1.34 1.812 1.36.57.023 1.07-.145 1.5-.5.426-.364.75-.868.969-1.516a7.089 7.089 0 00.36-2.063zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph1-6" overflow="visible">
          <Path d="M5.094-8.875c.726.012 1.351.21 1.875.594.52.386.906.922 1.156 1.61.25.679.332 1.417.25 2.218l-.016.172a5.907 5.907 0 01-.765 2.312A4.4 4.4 0 016.03-.375a3.85 3.85 0 01-2.093.531C3.218.145 2.593-.05 2.062-.438 1.54-.82 1.16-1.348.923-2.016.68-2.68.594-3.414.656-4.219a5.974 5.974 0 01.735-2.422c.406-.718.93-1.273 1.578-1.671a3.799 3.799 0 012.125-.563zM2.125-4.203a5.855 5.855 0 000 1.047c.05.636.238 1.14.563 1.515.332.375.769.575 1.312.594.477.024.922-.094 1.328-.344.414-.257.758-.644 1.031-1.156.282-.52.461-1.098.547-1.734a7.56 7.56 0 00.016-1.25c-.063-.645-.262-1.157-.594-1.532-.324-.375-.758-.57-1.297-.593-.75-.02-1.39.277-1.922.89-.523.606-.843 1.399-.968 2.375zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph1-7" overflow="visible">
          <Path d="M5.672-7.39l-.688-.063c-.937 0-1.671.418-2.203 1.25L1.703 0H.25l1.516-8.719h1.406l-.219 1.016c.625-.813 1.352-1.207 2.188-1.188.175 0 .406.04.687.11zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph1-8" overflow="visible">
          <Path d="M.672-4.375c.101-.883.344-1.68.719-2.39.382-.72.859-1.255 1.421-1.61a3.333 3.333 0 011.844-.516c.969.024 1.711.375 2.235 1.063l.843-4.547h1.454L7.046 0H5.719l.156-.938C5.187-.188 4.335.177 3.328.157 2.523.133 1.883-.176 1.406-.78c-.48-.614-.742-1.43-.781-2.453-.012-.32.004-.704.047-1.141zm1.406.844c-.023.761.113 1.355.406 1.781.29.43.711.648 1.266.656.844.032 1.594-.394 2.25-1.281l.688-4.016c-.313-.8-.899-1.21-1.75-1.234a2.248 2.248 0 00-1.516.531c-.438.356-.774.86-1 1.516a6.136 6.136 0 00-.344 2.047zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph1-10" overflow="visible">
          <Path d="M.578-3.094c.07-1 .664-1.89 1.781-2.672l.922-.609L2.937-7c-.386-.707-.558-1.363-.515-1.969.062-.883.379-1.597.953-2.14.582-.54 1.316-.801 2.203-.782.719.012 1.313.246 1.781.704.477.46.696 1.03.657 1.718-.055.918-.625 1.762-1.72 2.531L5.11-6.14l2.016 3.063a5.662 5.662 0 00.922-2.344h1.297c-.149 1.375-.637 2.527-1.469 3.453L9.141 0H7.516l-.594-.906C5.992-.176 4.969.176 3.844.156 2.832.145 2.016-.16 1.39-.766.773-1.367.504-2.145.578-3.094zm3.313 2.031c.718.024 1.476-.28 2.28-.906L4-5.375l-.344.234c-.969.668-1.508 1.356-1.61 2.063-.073.574.056 1.055.392 1.437.343.375.828.57 1.453.579zM3.844-9.03c-.043.449.094.945.406 1.484l.219.39L5.703-8c.57-.426.883-.922.938-1.484.03-.344-.063-.625-.282-.844-.218-.227-.511-.344-.875-.344-.449 0-.824.164-1.125.485-.293.324-.464.71-.515 1.156zm0 0"></Path>
        </Symbol>
        <Symbol id="glyph1-11" overflow="visible">
          <Path d="M9.422-3.734c-.23 1.21-.781 2.168-1.656 2.875C6.898-.15 5.852.187 4.625.156 3.906.145 3.273-.03 2.735-.375c-.544-.344-.965-.832-1.266-1.469-.305-.644-.469-1.36-.5-2.14a6.969 6.969 0 01.047-1.282l.14-.968c.25-1.758.867-3.149 1.86-4.172.988-1.02 2.187-1.516 3.593-1.485 1.102.024 1.977.383 2.625 1.079.645.687.985 1.64 1.016 2.859h-1.5c-.074-1.645-.719-2.531-1.938-2.656l-.265-.016C5.535-10.656 4.687-10.281 4-9.5c-.68.781-1.117 1.852-1.313 3.203l-.171 1.219-.047.719c-.031.98.14 1.761.515 2.343.383.586.957.887 1.72.907.82.03 1.5-.16 2.03-.579.532-.425.938-1.101 1.22-2.03zm0 0"></Path>
        </Symbol>
        <ClipPath id="clip1">
          <Path d="M0 234h119.25v10.254H0zm0 0"></Path>
        </ClipPath>
        <ClipPath id="clip2">
          <Path d="M68 131.004h51.25V230H68zm0 0"></Path>
        </ClipPath>
      </Defs>
      <G>
        <Use x="140.787" y="191.842" fill="#363636" xlinkHref="#glyph0-1"></Use>
        <Use x="176.445" y="191.842" fill="#363636" xlinkHref="#glyph0-2"></Use>
        <Use x="214.908" y="191.842" fill="#363636" xlinkHref="#glyph0-3"></Use>
        <Use x="263.889" y="191.842" fill="#363636" xlinkHref="#glyph0-4"></Use>
        <Use x="300.911" y="191.842" fill="#363636" xlinkHref="#glyph0-5"></Use>
        <Use x="332.553" y="191.842" fill="#FFF" xlinkHref="#glyph0-6"></Use>
        <Path
          fill="#FFF"
          d="M23.969 229.781H3.489a3.306 3.306 0 01-3.294-3.293V136.43a3.306 3.306 0 013.293-3.293h20.48a3.306 3.306 0 013.294 3.293v90.058a3.306 3.306 0 01-3.293 3.293zm0 0"
        ></Path>
        <G clipPath="url(#clip1)">
          <Path
            fill="#363636"
            d="M119.645 236.371v6.074c0 1.035-.84 1.809-1.81 1.809H2.005a1.804 1.804 0 01-1.809-1.809v-6.074c0-1.031.84-1.809 1.809-1.809h115.832c1.031 0 1.809.84 1.809 1.81zm0 0"
          ></Path>
        </G>
        <Path
          fill="#363636"
          d="M58.531 229.781h-20.48a3.306 3.306 0 01-3.293-3.293V136.43a3.306 3.306 0 013.293-3.293h20.48a3.306 3.306 0 013.293 3.293v90.058c-.062 1.809-1.484 3.293-3.293 3.293zm0 0"
        ></Path>
        <G clipPath="url(#clip2)">
          <Path
            fill="#363636"
            d="M117.316 223.84l-19.636 5.75a3.254 3.254 0 01-4.07-2.2l-25.454-86.374a3.252 3.252 0 012.196-4.067l19.64-5.816a3.258 3.258 0 014.07 2.195l25.454 86.442a3.255 3.255 0 01-2.2 4.07zm0 0"
          ></Path>
        </G>
        <Use x="192.332" y="228.31" fill="#363636" xlinkHref="#glyph1-1"></Use>
        <Use x="204.066" y="228.31" fill="#363636" xlinkHref="#glyph1-2"></Use>
        <Use x="214.012" y="228.31" fill="#363636" xlinkHref="#glyph1-3"></Use>
        <Use x="223.498" y="228.31" fill="#363636" xlinkHref="#glyph1-4"></Use>
        <Use x="233.549" y="228.31" fill="#363636" xlinkHref="#glyph1-5"></Use>
        <Use x="243.769" y="228.31" fill="#363636" xlinkHref="#glyph1-6"></Use>
        <Use x="254.134" y="228.31" fill="#363636" xlinkHref="#glyph1-2"></Use>
        <Use x="264.079" y="228.31" fill="#363636" xlinkHref="#glyph1-7"></Use>
        <Use x="270.73" y="228.31" fill="#363636" xlinkHref="#glyph1-8"></Use>
        <Use x="280.99" y="228.31" fill="#363636" xlinkHref="#glyph1-9"></Use>
        <Use x="286.19" y="228.31" fill="#363636" xlinkHref="#glyph1-10"></Use>
        <Use x="297.377" y="228.31" fill="#363636" xlinkHref="#glyph1-9"></Use>
        <Use x="302.577" y="228.31" fill="#363636" xlinkHref="#glyph1-11"></Use>
        <Use x="314.231" y="228.31" fill="#363636" xlinkHref="#glyph1-6"></Use>
      </G>
    </Svg>
  );
}

export default Icon;