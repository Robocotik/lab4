const BurgerMenu = isLight => {
  return `
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M4 18L20 18" stroke=${
          isLight ? '#000000' : '#ffffff'
        } stroke-width="2" stroke-linecap="round"></path>
        <path d="M4 12L20 12" stroke=${
          isLight ? '#000000' : '#ffffff'
        } stroke-width="2" stroke-linecap="round"></path>
        <path d="M4 6L20 6" stroke=${
          isLight ? '#000000' : '#ffffff'
        } stroke-width="2" stroke-linecap="round"></path>
      </g>
    </svg>
  `;
};

export default BurgerMenu;
