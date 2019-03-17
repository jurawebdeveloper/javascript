//document.write('<h2>Teste...</h2>')
var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');


elForm.addEventListener('submit', checkTerms, 'false');
elSelectPackage.addEventListener('change', packageHint, 'false');

function checkTerms(e){
    if(!elTerms.checked){
        elPackageHint.innerHTML = 'Você deve aceitar os termos.';
        e.preventDefault();
    }
}

function packageHint() {
    var package = this.options[this.selectedIndex].value;
    if(package == 'monthly') {
        elPackageHint.innerHTML = 'Economizr $10 escolhendo o plano anual!';
    } else {
        elPackageHint.innerHTML = 'Ótima escolha';
    }
}