/**
 * Created by richwilliams on 1/14/17.
 */
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            d = document;

            var f = d.createElement('form');
            f.action = 'https://hooks.zapier.com/hooks/catch/1912420/h35ku0/';
            f.method = 'post';
            var i = d.createElement('input');
            i.type = 'hidden';
            i.name = 'url';
            i.title = 'title';
            var amazid = '&tag=pollcart-20';
            i.value = tab.url.concat(amazid);
            f.appendChild(i);
            d.body.appendChild(f);
            f.submit();
        });
    }, false);
}, false);