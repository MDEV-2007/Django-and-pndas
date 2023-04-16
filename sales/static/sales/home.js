console.log('hello');

const reportBtn = document.getElementById('report-btn')
const img  = document.getElementById('img')
const modalBody  = document.getElementById('model-body')
const reportFrom = document.getElementById('report-form')

const reportName  = document.getElementById('id_name')
const reportRemarks  = document.getElementById('id_remarks')
const csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value
console.log(reportName);
console.log(reportRemarks);

console.log(reportBtn);
console.log(img);

if (img){
    reportBtn.classList.remove('not-visible')
}

reportBtn.addEventListener('click', () => {
    console.log('bosildi');
    img.setAttribute('class', 'w-100')
    modalBody.prepend(img)
    console.log(img.src);

    reportFrom.addEventListener('submit', (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('csrfmiddlewaretoken', csrf)
        formData.append('name', reportName.value)
        formData.append('remarks', reportRemarks.value)
        formData.append('image', img.src)

        $.ajax({
            type: "POST",
            url: '/reports/save/',
            data: formData,
            success:function(response){
                console.log(response);
            },
            error:              function(error){
                console.log(error);
            },
            processData:false,
            contentType:false
        })
    })
})