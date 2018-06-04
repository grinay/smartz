class Eos {
  scatter;

  constructor () {
    document.addEventListener('scatterLoaded', scatterExtension => {
      // Scatter will now be available from the window scope.
      // At this stage the connection to Scatter from the application is
      // already encrypted.
      this.scatter = window.scatter

      // It is good practice to take this off the window once you have
      // a reference to it.
      window.scatter = null

      // If you want to require a specific version of Scatter
      //scatter.requireVersion(3.0);
    })
  }
}


export default new Eos();
