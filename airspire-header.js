class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1 class="header">Airspire Publishing</h1>
            <table class="navigation">
                <tr>
                    <td><a href="index.html">Home</a></td>
                    <td><a href="authors.html">Authors</a></td>
                    <td><a href="series.html">Series</a></td>
                </tr>
            </table>
        </header>
        `;
    }
}
customElements.define('airspire-header', MyHeader);