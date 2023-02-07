function getCookie(name:string) : string | undefined {
  const matches = document.cookie.match(
    // eslint-disable-next-line
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


function setCookie( name: string, value: string | null, props: any = {}): void {
  props = {
    path: '/',
    ...props
  };

  let exp: Date | number = props.expires;

  if (typeof exp == 'number' && exp) {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
  }

  if (exp && typeof exp!== 'number' && exp.toUTCString) {
      props.expires = exp.toUTCString();
  }

  if (value !== null) value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;

  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

function deleteCookie(name: string):void {
  setCookie(name, null, { expires: -1 });
}

export { getCookie, setCookie, deleteCookie };