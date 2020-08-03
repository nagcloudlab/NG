
import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-navbar',
    template: `
    <nav class="navbar navbar-light bg-info">
        <a class="navbar-brand" href="/">{{title}}</a>
    </nav>
    `
})
class NavbarComponent {

    @Input()
    title = "brand-name"

}

export { NavbarComponent };