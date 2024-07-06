
const myform = document.getElementById('myform')
const txt_alamat = myform.Textbox('txt_alamat')


export async function Init() {
	console.log('test Init')

	myform.SetReadonly(true)

}