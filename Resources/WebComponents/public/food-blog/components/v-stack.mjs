import { attachStylesheetTo } from "../js/general/utilities.mjs"

const template = document.createElement('template')
template.innerHTML = `
    <style>
    </style>
    <div class="w3-main w3-content w3-padding" style="max-width:1200px;margin-top:100px" id="food-grid">
    </div>
`
class VStack extends HTMLElement {
    set viewModel(newValue) {
        this._viewModel = newValue
        this.removeExistingChildElements()
        this.addChildElements()
    }

    removeExistingChildElements() {
        const container=this.shadowRoot.querySelector('div')
        container.innerHTML=''
    }

    addChildElements() {
        const actualData = this._viewModel
        const childTemplate = this._childTemplateNode

        actualData.forEach((child) => {
            const childTemplateClone = document.importNode(childTemplate, true)
            childTemplateClone.foodBlogEntry = child
            this.shadowRoot.appendChild(childTemplateClone)    
        })
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'})
        attachStylesheetTo(this)
        this.cloneAndAppendTemplate()
        this.prepareChildTemplate()
    }

    cloneAndAppendTemplate() {
        const clone=document.importNode(template.content, true)
        this.shadowRoot.appendChild(clone)
    }

    prepareChildTemplate() {
        const childTemplate = this.querySelector('*')
        this._childTemplateNode = childTemplate.cloneNode(true)
        childTemplate.remove()
    }
}

customElements.define('v-stack', VStack)
