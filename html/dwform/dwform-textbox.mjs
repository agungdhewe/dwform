export default function Textbox(el) {

	let wrapper = document.createElement('div');
	var style = el.getAttribute("style")
	var placeholder = el.getAttribute("placeholder")
	
	
	el.removeAttribute("style")
	el.removeAttribute("placeholder")
	
	

	el.setAttribute("value", el.value)
	
	

	wrapper.classList.add('dw-input-textbox')
	wrapper.style = style

	el.parentNode.insertBefore(wrapper, el);

	// add label
	var label = document.createElement('label');
	label.setAttribute("for", el.id)
	label.innerHTML = placeholder

	// error message
	var errormessage = document.createElement('span');
	errormessage.classList.add('errormessage')

	// input mask to create readonly
	var inpputmask = document.createElement('div');
	inpputmask.classList.add('dw-inpputmask')
	


	wrapper.appendChild(el);
	wrapper.appendChild(inpputmask);
	wrapper.appendChild(label);	
	wrapper.appendChild(errormessage)	
	el.classList.remove('dw-textbox')

	el.addEventListener('keyup', (event) => {
		textbox_keyup(event)
	})


	let obj = {
		  GetInput: () => {
			return el
		}

		, GetType: () => {
			return 'textbox'
		}

		, SetReadonly: (value) => {
			setreadonly(obj, value)
		}

		, GetElement() {
			return wrapper
		}
	}


	return obj
}


function textbox_keyup(event) {
 	var el = event.srcElement
	el.setAttribute("value", el.value)
}

function setreadonly(obj, value) {
	var wrapper = obj.GetElement()
	var el = obj.GetInput()

	wrapper.setAttribute("readonly", value)
	el.setAttribute("readonly", value)

}