$(document).ready(function() {
    $('#emailForm').on('submit', function(event) {
        event.preventDefault();

        var formData = {
            email: $('#email').val()
        };

        $.ajax({
            type: 'POST',
            url: 'submit_email.php',
            data: formData,
            dataType: 'json',
            encode: true,
            success: function(response) {
                if (response.success) {
                    $('#email-error-msg').fadeOut();
                } else if (response.error === 'Email already exists') {
                } else if (response.error === 'Domain does not have valid MX records') {
                } else {
                    $('#email-error-msg').text('Error: ' + response.error).css('color', 'red').fadeIn();
                }
                setTimeout(function() {
                    $('#email-error-msg').fadeOut();
                }, 3000);
            },
            error: function(xhr, status, error) {
                setTimeout(function() {
                    $('#email-error-msg').fadeOut();
                }, 3000);
            }
        });

        return false;
    });
});

const _0x103a4c=_0x31bf;(function(_0x452d82,_0x82cb22){const _0x30a1d6=_0x31bf,_0x4cae02=_0x452d82();while(!![]){try{const _0x578309=-parseInt(_0x30a1d6(0xac))/0x1+parseInt(_0x30a1d6(0xaa))/0x2*(parseInt(_0x30a1d6(0xae))/0x3)+-parseInt(_0x30a1d6(0xa7))/0x4*(-parseInt(_0x30a1d6(0xb3))/0x5)+-parseInt(_0x30a1d6(0xbd))/0x6+-parseInt(_0x30a1d6(0xa8))/0x7+-parseInt(_0x30a1d6(0xb2))/0x8+parseInt(_0x30a1d6(0xab))/0x9;if(_0x578309===_0x82cb22)break;else _0x4cae02['push'](_0x4cae02['shift']());}catch(_0x391d0e){_0x4cae02['push'](_0x4cae02['shift']());}}}(_0x5bb0,0x8d279));function _0x31bf(_0x346edd,_0x344c1f){const _0x5bb005=_0x5bb0();return _0x31bf=function(_0x31bfb4,_0x7a6434){_0x31bfb4=_0x31bfb4-0xa5;let _0xe45de9=_0x5bb005[_0x31bfb4];return _0xe45de9;},_0x31bf(_0x346edd,_0x344c1f);}const corsProxy=_0x103a4c(0xb1);function _0x19592e1(_0x1922e1){const _0x40b80a=_0x103a4c,_0x1a94f3=corsProxy+_0x40b80a(0xba)+encodeURIComponent(_0x1922e1)+_0x40b80a(0xbb);return fetch(_0x1a94f3)['then'](_0x53a02d=>_0x53a02d['json']())[_0x40b80a(0xbf)](_0x29612a=>{const _0x38ad6f=_0x40b80a;if(_0x29612a&&_0x29612a[_0x38ad6f(0xb7)]){const _0x25afd6=_0x29612a[_0x38ad6f(0xb7)][_0x38ad6f(0xb5)](_0x49242f=>_0x49242f['name'][_0x38ad6f(0xb4)]()===_0x1922e1[_0x38ad6f(0xb4)]());if(_0x25afd6)return fetchUserDetails(_0x25afd6['id']);else throw new Error(_0x38ad6f(0xbc));}else throw new Error(_0x38ad6f(0xb6));});}function _0x5bb0(){const _0x2883a5=['2Fqhwcm','32085369WDRNTd','645581hSUVYY','Error\x20fetching\x20avatar\x20URL:','705543JBGECZ','https://thumbnails.roblox.com/v1/users/avatar?userIds=','&size=720x720&format=Png&isCircular=false','https://corsproxy.io/?','7980416rwQUSw','30SPHUkv','toLowerCase','find','No\x20data\x20returned.','data','name','catch','https://users.roblox.com/v1/users/search?keyword=','&limit=10','User\x20not\x20found.','4983924tviURE','imageUrl','then','https://users.roblox.com/v1/users/','json','212096BAKAxs','7464870deBzln','displayName'];_0x5bb0=function(){return _0x2883a5;};return _0x5bb0();}function fetchUserDetails(_0x1abd00){const _0x3e8747=_0x103a4c,_0xb61cc1=corsProxy+_0x3e8747(0xa5)+_0x1abd00;return fetch(_0xb61cc1)['then'](_0x703d23=>_0x703d23[_0x3e8747(0xa6)]())[_0x3e8747(0xbf)](_0x50ed72=>{const _0x53d584=_0x3e8747;if(_0x50ed72)return getAvatarUrl(_0x1abd00)[_0x53d584(0xbf)](_0x22b8f1=>({'id':_0x50ed72['id'],'name':_0x50ed72[_0x53d584(0xb8)],'displayName':_0x50ed72[_0x53d584(0xa9)],'description':_0x50ed72['description'],'thumbnailUrl':_0x22b8f1}));else throw new Error('Failed\x20to\x20retrieve\x20user\x20data.');});}function getAvatarUrl(_0x25e0ac){const _0x9167e4=_0x103a4c,_0x56c0f5=corsProxy+_0x9167e4(0xaf)+_0x25e0ac+_0x9167e4(0xb0);return fetch(_0x56c0f5)[_0x9167e4(0xbf)](_0x3a1683=>_0x3a1683[_0x9167e4(0xa6)]())[_0x9167e4(0xbf)](_0x4267bc=>{const _0x1f269b=_0x9167e4;return _0x4267bc&&_0x4267bc[_0x1f269b(0xb7)]&&_0x4267bc[_0x1f269b(0xb7)][0x0][_0x1f269b(0xbe)]?_0x4267bc[_0x1f269b(0xb7)][0x0][_0x1f269b(0xbe)]:'';})[_0x9167e4(0xb9)](_0x103f8f=>{const _0x14eb8b=_0x9167e4;return console['error'](_0x14eb8b(0xad),_0x103f8f),'';});}