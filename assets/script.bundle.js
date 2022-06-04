const selectedVariants = new Map();

function setAddDisabled(form) {
    const variantId = form.querySelector('[name="variant"]').value;
    const sectionId = form.querySelector('[name="section"]').value;
    const canAdd = window.BundleBuilder.canAddVariant(variantId, sectionId);
    form.querySelector('[type="submit"]').disabled = !canAdd;
}


/* Change variant price after variant change */
Array.prototype.forEach.call(
    document.querySelectorAll('.bundle-builder--add-to-bundle-form select[name="variant"]'),
    function (select) {
        select.addEventListener('change', function (e) {
            const variantId = e.target.value;
            selectedVariants.set(e.target.id, variantId);
            const price = e.target.querySelector('option[value="' + variantId + '"]').dataset.price;
            e.target.parentNode.querySelector('.variant-price').textContent = price;

           const form = e.target.parentElement;
           setAddDisabled(form);
        });
    }
);


function render() {
    selectedVariants.forEach(function (variantId, selectId) {
        const select = document.getElementById(selectId);
        if (select) {
            select.value = variantId;
        }
    });
    Array.prototype.forEach.call(
        document.querySelectorAll('.bundle-builder--add-to-bundle-form'),
        setAddDisabled,
    );
}
/* Change variant to what was selected last */
document.body.addEventListener('bundlebuilder:render', render);
render()