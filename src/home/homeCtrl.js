export class homeCtrl {

  constructor() {
  }

  $onInit() {
    this.message = 'Hello this'
    this.address = '3608 Sperry Ave.'
    this.addresses = []
    console.log('on init');
  }

  clickIt () {
    this.message = this.message === 'New Message'
      ? 'Hello this'
      : 'New Message'
  }

  addAddress () {
    if (this.address) {
      this.addresses.push(this.address);
    } else {
      alert('No address');
    }

    this.address = ''
  }
}

