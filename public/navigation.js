import Navigo from 'navigo';

let navigation = null;

export function navigate(page) {
  if (navigation) {
    navigation.navigate(page);
  }
}

export default function init(pages) {
  navigation = new Navigo('/');

  navigation.on('/', pages.home);
  navigation.on('/contact', pages.contact);
  navigation.notFound(pages.notFound);

  navigation.resolve();
}
