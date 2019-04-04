function EasyHTTP () {
  this.http = new XMLHttpRequest();
}

// GET
EasyHTTP.prototype.get = function (url) {
  this.http.open('GET', url, true);

    let self = this;
  this.http.onload = function () {
    if(self.http.status === 200) {
      console.log(self.http.responseText);
    }


  }

  this.http.send();

}