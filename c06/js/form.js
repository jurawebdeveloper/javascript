//document.write('<h2>Teste...</h2>')
var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');


elForm.addEventListener('submit', checkTerms, 'false');


function checkTerms(e){
    if(!elTerms.checked){
        elPackageHint.innerHTML = 'Você deve aceitar os termos.';
        e.preventDefault();
    }
}