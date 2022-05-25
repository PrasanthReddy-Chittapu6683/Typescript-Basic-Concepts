import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
    constructor(private container: HTMLUListElement) {
    }

    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
        const liTag = document.createElement('li')
        const h4Tag = document.createElement('h4')
        h4Tag.innerHTML = heading;
        liTag.append(h4Tag)
        const pTag = document.createElement('p')
        pTag.innerHTML = item.format();

        liTag.append(pTag)
        pos === 'start' ? this.container.prepend(liTag) : this.container.append(liTag)
    }

}