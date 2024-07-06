import Textbox from './dwform-textbox.mjs'


// const txt_nama = Textbox(document.getElementById('txt_nama'))
HTMLFormElement.prototype.Items = {}
HTMLFormElement.prototype.Validate = Validate
HTMLFormElement.prototype.SetReadonly = SetReadonly
HTMLFormElement.prototype.HasFormLocking = HasFormLocking
HTMLFormElement.prototype.Lock = FormLock
HTMLFormElement.prototype.IsLock = IsFormLock


HTMLFormElement.prototype.addItem = addItem
HTMLFormElement.prototype.Textbox = createTextbox



export async function Init(...forms) {
	console.log('DWForm Init')

	// setup form component
	
	for (var formname of forms) {
		let form = document.getElementById(formname)
		var autorender = form.getAttribute("autorender")
		var locking = form.getAttribute("locking")
		if (autorender=="true") {
			setup_textbox(form)
		}
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
	console.log(`add item ${id}`)
	if (this.Items[id]!==undefined) {
		console.error(`item ${id} already exists`)
		return
	}
	this.Items[el.id] = obj
	obj.SetForm(this)
}


async function setup_textbox(form) {
	var items = form.querySelectorAll('.dw-textbox');
	for (var i = 0; i < items.length; i++) {
		var el = items[i];
		createTextbox(el, form)
	}
} 


function createTextbox(el, form) {
	if (form===undefined) {
		form = this
	}

	var obj = Textbox(el)
	form.addItem(obj)
	el.classList.remove('dw-textbox')

	if (form.HasFormLocking()) {
		obj.SetReadonly(true)
	}

	return obj
}

function HasFormLocking() {
	var locking = this.getAttribute("locking")
	if (locking=="true") {
		return true
	}
	return false
}

function FormLock(lock) {

}

function IsFormLock() {
	
}