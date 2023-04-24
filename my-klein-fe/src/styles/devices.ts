export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const sizesRem = {
  mobileS: `${320 / 16}rem`,
  mobileM: `${375 / 16}rem`,
  mobileL: `${425 / 16}rem`,
  tablet: `${768 / 16}rem`,
  laptop: `${1024 / 16}rem`,
  laptopL: `${1440 / 16}rem`,
  desktop: `${2560 / 16}rem`,
};
export const devices = {
  mobileS: `(min-width: ${sizesRem.mobileS})`,
  mobileM: `(min-width: ${sizesRem.mobileM})`,
  mobileL: `(min-width: ${sizesRem.mobileL})`,
  tablet: `(min-width: ${sizesRem.tablet})`,
  laptop: `(min-width: ${sizesRem.laptop})`,
  laptopL: `(min-width: ${sizesRem.laptopL})`,
  desktop: `(min-width: ${sizesRem.desktop})`,
};
