class Drawer {
  takeDummyContent(wrapper: HTMLDivElement) {
    const dummy = document.createElement('span');
    dummy.innerText = 'Nothing was found';
    dummy.style.color = '#ffffff';
    wrapper.append(dummy);
  }
}

export const appDrawer = new Drawer();