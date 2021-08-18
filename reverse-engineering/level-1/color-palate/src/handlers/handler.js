export const buttonClick = (event) => {
    debugger;
    console.log(event.target.value);
    const color = event.target.form.selection.value;
    document.body.style.background = color ;
}