const preview = (fileSelector,previewImg)=>{
    const file = fileSelector.files[0];
    if (file){
        const reader = new FileReader();
        reader.addEventListener('load',()=>{
            previewImg.style.opacity='0';
            previewImg.setAttribute("src",reader.result);
            previewImg.style.opacity='1';

        });
        reader.readAsDataURL(file);
    }else{
        previewImg.setAttribute("src",null);
        previewImg.style.opacity=null;
    }
}

let photoFile = document.getElementById('candidate-photo');
let signatureFile = document.getElementById("candidate-signature");
let photoContainer = document.getElementById('photoPreview');
let photo = document.getElementById('photoPreview__image');

let signatureContainer = document.getElementById('signaturePreview');
let signature = document.getElementById('signaturePreview__image')
photoFile.addEventListener('change',()=>{
    preview(photoFile,photo)
});
signatureFile.addEventListener('change',()=>{
    preview(signatureFile,signature)
})

