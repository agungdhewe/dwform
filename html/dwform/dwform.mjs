import Textbox from './dwform-textbox.mjs'


// const txt_nama = Textbox(document.getElementById('txt_nama'))
HTMLFormElement.prototype.Items = {}
HTMLFormElement.prototype.Validate = Validate
HTMLFormElement.prototype.SetReadonly = SetReadonly


HTMLFormElement.prototype.addItem = addItem




export async function Init(...forms) {
	console.log('DWForm Init')

	// setup form component
	for (var formname of forms) {
		let form = document.getElementById(formname)
		setup_textbox(form)
	}

}


function Validate() {
	console.log(this.SetupData)
}

function SetReadonly(readonly) {
	for (var id in this.Items) {
		var item = this.Items[id]
		item.SetReadonly(readonly)
	}
}

function addItem(obj) {
	var el = obj.GetInput()
	var id = el.id
	if (this.Items[id]!==undefined) {
		console.error(`item ${id} already exists`)
		return
	}
	this.Items[el.id] = obj
}


async function setup_textbox(form) {
	var items = form.querySelectorAll('.dw-textbox');
	for (var i = 0; i < items.length; i++) {
		var o = items[i];
		form.addItem(Textbox(o))
		o.classList.remove('dw-textbox')
	}
} 


