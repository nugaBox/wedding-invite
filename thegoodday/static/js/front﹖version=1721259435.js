$(function() {
    $('.animationUp').css({
        'position': 'relative',
        'top': '50px'
    });

    $('.animationDown').css({
        'position': 'relative',
        'top': '-50px'
    });

    $('.animationDown2').css({
        'top': '-50px'
    });

    $('.animationUpEtc').css({
        'bottom': '-160px;'
    });

    $('.animationDownTheme17').css({
        'bottom': '0px'
    });

    $('.animationDownTheme53').css({
        'top': '0px'
    });

    $('.animationDownTheme58').css({
        'top': '0px'
    });

    $('.animationUpTheme49').css({
        'top': '130px'
    });

    $('.animation.animationDownTheme17.animationDelay1').delay(1000).animate({
        'opacity': '1',
        'bottom': '-15px'
    }, 1500);

    $('.animation.animationUpTheme49.animationDelay1').delay(1000).animate({
        'opacity': '1',
        'top': '80px'
    }, 1500);

    $('.animation.animationDownTheme53.animationDelay1').delay(1000).animate({
        'opacity': '1',
        'top': '30px'
    }, 1500);

    $('.animation.animationDownTheme58.animationDelay1').delay(1000).animate({
        'opacity': '1',
        'top': '90px'
    }, 1500);

    $('.animation.animationUpEtc.animationDelay1').delay(1000).animate({
        'opacity': '1',
        'bottom': '-95px'
    }, 1500);

    $('.animation.animationUp.animationDelay1').delay(1000).animate({
        'opacity': '1',
        'top': '0px'
    }, 1500);

    $('.animation.animationIn.animationDelay1').delay(1000).animate({
        'opacity': '1'
    }, 1500);

    $('.animation.animationIn.animationDelay2').delay(2000).animate({
        'opacity': '1'
    }, 1500);

    $('.animation.animationUp.animationDelay2').delay(2000).animate({
        'opacity': '1',
        'top': '0px'
    }, 1500);

    $('.animation.animationUp.animationDelay3').delay(2700).animate({
        'opacity': '1',
        'top': '0px'
    }, 1500);

    $('.animation.animationUp.animationDelay4').delay(3500).animate({
        'opacity': '1',
        'top': '0px'
    }, 1500);

    $('.animation.animationUp.animationDelay5').delay(5000).animate({
        'opacity': '1',
        'top': '0px'
    }, 1500);

    $('.animation.animationUp.animationDelay6').delay(5700).animate({
        'opacity': '1',
        'top': '0px'
    }, 1500);

    $('.animation.animationDown.animationDelay1').delay(1000).animate({
        'opacity': '1',
        'top': '0px'
    }, 1500);

    $('.animation.animationDown2.animationDelay1').delay(1000).animate({
        'opacity': '1',
        'top': '70px'
    }, 1500);

    $('.animation.animationDown.animationDelay2').delay(2000).animate({
        'opacity': '1',
        'top': '0px'
    }, 1500);

    $(document).scroll(function() {
        // var pos = $(this).scrollTop() + ( $(window).height() - ( $(window).height() / 3 ) );
        var pos = $(this).scrollTop() + $(window).height();

        $('.animation.animationIn').each(function() {
            if ( pos > $(this).offset().top ) {
                // console.log('pos', pos);
                // console.log('this', $(this).offset().top);
                $(this).animate({
                    'opacity': '1'
                }, 1000);
            }
        });

        $('.animation.animationUp').each(function() {
            if ( pos > $(this).offset().top ) {
                // console.log('pos', pos);
                // console.log('this', $(this).offset().top);
                $(this).animate({
                    'opacity': '1',
                    'top': '0px'
                }, 1000);
            }
        });
    });

    $('.quicklink').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('data-target');
        var top = $('#' + id).offset().top - 39;
        $('html, body').animate({ 'scrollTop' : top }, 600);
    });

    $(window).on('scroll', function() {
        var top = $(this).scrollTop();

        if ( top > 100 )
            $('.quickmenu').show();
        else
            $('.quickmenu').hide();
    });

    $('.sns_link').on('click', function(e) {
        e.preventDefault();
    });
    var clipboard = new ClipboardJS('.sns_link');
    clipboard.on('success', function(e) {
        alert('복사 되었습니다');
    });

    $('.copy_account').on('click', function(e) {
        e.preventDefault();
    });
    var clipboard2 = new ClipboardJS('.copy_account');
    clipboard2.on('success', function(e) {
        alert('복사 되었습니다');
    });
        
    // 방명록 등록 보이기
    $('#btn_guest_view').on('click', function() {
        if ( $('.guest_form_wrapper').is(':visible') )
            $('.guest_form_wrapper').hide();
        else {
            $('.guest_form_wrapper').show();
            guest_reset();
        }
    });

    // 방명록 등록 보이기 (레이어 방식)
    $('#more_guest').on('click', function(e) {
        e.preventDefault();

        if ( !$('.guest_layer').is(':visible') ) {
            $('.guest_layer').show();
            $('body').css('overflow', 'hidden');
            guest_reset();
        }
    });

    // 방명록 등록 보이기 (레이어 방식) - 퀵메뉴용
    $('.quickguest').on('click', function(e) {
        e.preventDefault();
        
        if ( !$('.guest_layer').is(':visible') ) {
            $('.guest_layer').show();
            $('body').css('overflow', 'hidden');
            guest_reset();
        }
    });

    $('#btn_guest_layer_close').on('click', function(e) {
        e.preventDefault();

        if ( $('.guest_layer').is(':visible') ) {
            $('.guest_layer').hide();
            $('body').css('overflow', 'visible');
        }
    });

    // 방명록 페이징
    $(document).on('click', '.paging', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $.ajax({
            method: 'post',
            url: url,
            dataType: 'html',
            success: function(data) {
                $('.guest_list_wrapper').html(data);
            }
        });    
    });
});

// 계좌번호 보기
function view_bank_account(btn) {
    event.preventDefault();
    if ( $(btn).next('.view_account_area').is(':visible') )
        $(btn).next('.view_account_area').hide();
    else
        $(btn).next('.view_account_area').show();
}

// 방명록 등록
function guest_regist()
{
    var name = $('#ig_name').val();
    var password = $('#ig_password').val();
    var message = $('#ig_message').val();

    if ( name == '' ) {
        alert('이름을 입력해 주세요.');
        return false;
    }
    else if ( password == '' ) {
        alert('비밀번호를 입력해 주세요.');
        return false;
    }
    else if ( message == '' ) {
        alert('축하 메시지를 입력해 주세요.');
        return false;
    }
    else {
        $('#frm_guest').submit();
    }    
}

// 방명록 등록
function guest_reply_regist(button)
{
    var frm = $(button).closest('li').find('.guest_reply_form_wrapper');

    var password = frm.find('[name=reply_password]').val();
    var reply = frm.find('[name=ig_reply]').val()

    if ( password == '' ) {
        alert('비밀번호를 입력해 주세요.');
        return false;
    }
    else if ( reply == '' ) {
        alert('댓글을 입력해 주세요.');
        return false;
    }
    else {
        frm.find('.frm_guest_reply').submit();
    }    
}

// 방명록 수정
function guest_modify(ig_seq)
{
    $.ajax({
        method: 'post',
        url: '/invitation/get_guest_info/' + ig_seq,
        dataType: 'json',
        success: function(data) {
            if ( !$('.guest_form_wrapper').is(':visible') )
                $('.guest_form_wrapper').show();

            $('#ig_seq').val(ig_seq);
            $('#ig_mode').val('modify');
            $('#ig_name').val(data.ig_name);
            $('#ig_message').val(data.ig_message);
            $('#btn_guest_regist').text('축하 메시지 수정');
            if ( $('#ig_message').closest('.guest_form_item').find('.emojionearea .emojionearea-editor').length > 0 )
                $('#ig_message').closest('.guest_form_item').find('.emojionearea .emojionearea-editor').html(nl2br(data.ig_message));
        }
    });
}

// 방명록 삭제
function guest_delete(ig_seq)
{
    $.ajax({
        method: 'post',
        url: '/invitation/get_guest_info/' + ig_seq,
        dataType: 'json',
        success: function(data) {
            if ( !$('.guest_form_wrapper').is(':visible') )
                $('.guest_form_wrapper').show();

            $('#ig_seq').val(ig_seq);
            $('#ig_mode').val('delete');
            $('#ig_name').val(data.ig_name);
            $('#ig_message').val(data.ig_message);
            $('#btn_guest_regist').text('축하 메시지 삭제');
        }
    });
}

// 방명록 가져오기
function guest_list(in_seq, page)
{
    $.ajax({
        method: 'post',
        url: '/invitation/get_guest/' + in_seq + '/' + page,
        dataType: 'html',
        success: function(data) {
            $('.guest_list_wrapper').html(data);
        }
    });
}

// 방명록 가져오기
function new_guest_list(in_seq, page)
{
    $.ajax({
        method: 'post',
        url: '/invitation/new_get_guest/' + in_seq + '/' + page,
        dataType: 'html',
        success: function(data) {
            $('.guest_list_wrapper').html(data);
            $('#ig_message, [name=ig_reply]').emojioneArea();
        }
    });
}

// 방명록 처리 리턴 메시지
function guest_return_message(msg, in_seq)
{
    alert(msg);
    guest_reset();
    guest_list(in_seq, 0);
}

// 방명록 처리 리턴 메시지
function new_guest_return_message(msg, in_seq)
{
    alert(msg);
    guest_reset();
    new_guest_list(in_seq, 0);
}
//방명록 신랑/신부 비밀번호 보이기
function cmt_passwd_show(button, target) {
	var frm = $(button).closest('li').find('.check_passwd_form_wrapper');
	frm.find('[name=target]').val(target);
	frm.show();
}
//방명록 신랑/신부 비밀번호 체크
function cmt_passwd_check(button, ig_seq) {
	var frm = $(button).closest('li').find('.check_passwd_form_wrapper');
	var target = frm.find('[name=target]').val();
	var cmd_passwd = frm.find('[name=cmd_password]').val();
	var in_seq = frm.find('[name=p_in_seq]').val();

	// json 형식으로 데이터 set
	var params = {
		  in_seq      : in_seq
		, passwd       : cmd_passwd
	}

	// ajax 통신
	$.ajax({
		type : "POST",            
		url : "/invitation/chk_cmd_passwd",      
		data : params,            
		success : function(data) { 
			//alert(data);
			if(data == '1') {
				frm.hide();
				guest_reply_mode(button, ig_seq, target, 'regist', '답글 등록');

				var refrm = $(button).closest('li').find('.guest_reply_form_wrapper');
				var i_passwd = refrm.find('[name=reply_password]');
				i_passwd.val(cmd_passwd);
				i_passwd.prop("type", "hidden");
				var respan = refrm.find('.reply_type');
				respan.removeClass( 'w49' );
				respan.addClass( 'w20p' );


			}else if(data == '0') {
				alert("비밀번호가 일치하지 않습니다.");
			}else {
				alert("오류가 발생하였습니다.<br>잠시후 다시 시도해주세요.");
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown){ 
			alert("오류가 발생하였습니다.<br>잠시후 다시 시도해주세요.")
		}
	});

	
}

function guest_reply(button, ig_seq, target)
{
    guest_reply_mode(button, ig_seq, target, 'regist', '답글 등록');
}

function guest_reply_modify(button, ig_seq, target)
{
    guest_reply_mode(button, ig_seq, target, 'modify', '답글 수정');
}

function guest_reply_delete(button, ig_seq, target)
{
    guest_reply_mode(button, ig_seq, target, 'delete', '답글 삭제');
}

function guest_reply_mode(button, ig_seq, target, mode, text)
{    
    $('.guest_reply_form_wrapper').hide();
    var frm = $(button).closest('li').find('.guest_reply_form_wrapper');
    if ( target == 'groom' )
        frm.find('.reply_type').removeClass('bride').addClass('groom');
    else if ( target == 'bride' )
        frm.find('.reply_type').removeClass('groom').addClass('bride');
    frm.find('[name=target]').val(target);
    frm.find('[name=reply_mode]').val(mode);
    frm.find('.btn_guest_reply_action').text(text);

    if ( mode != 'regist' )
    {
        $.ajax({
            method: 'post',
            url: '/invitation/get_guest_info/' + ig_seq,
            dataType: 'json',
            success: function(data) {
                var reply = ( target == 'groom' ) ? data.ig_reply : data.ig_reply2;
                frm.find('[name=ig_reply]').val(reply);
                if ( $('.guest_reply_form_wrapper .guest_form_item .emojionearea .emojionearea-editor').length > 0 )
                    $('.guest_reply_form_wrapper .guest_form_item .emojionearea .emojionearea-editor').html(nl2br(reply));
                frm.show();
            }
        });
    }    
    else {
        frm.find('[name=ig_reply]').val('');
        frm.show();
    }
}

// 방명록 등록
function self_guest_regist(button)
{
    var frm = $(button).closest('li').find('.guest_reply_form_wrapper');

    var password = frm.find('[name=reply_password]').val();
    var reply = frm.find('[name=ig_reply]').val()

    if ( password == '' ) {
        alert('비밀번호를 입력해 주세요.');
        return false;
    }
    else if ( reply == '' ) {
        alert('댓글을 입력해 주세요.');
        return false;
    }
    else {
        frm.find('.frm_guest_reply').submit();
    }    
}

// 방명록 수정
function self_guest_modify(ig_seq)
{
    $.ajax({
        method: 'post',
        url: '/selfmake/get_guest_info/' + ig_seq,
        dataType: 'json',
        success: function(data) {
            if ( !$('.guest_form_wrapper').is(':visible') )
                $('.guest_form_wrapper').show();

            $('#ig_seq').val(ig_seq);
            $('#ig_mode').val('modify');
            $('#ig_name').val(data.ig_name);
            $('#ig_message').val(data.ig_message);
            $('#btn_guest_regist').text('축하 메시지 수정');
        }
    });
}

// 방명록 삭제
function self_guest_delete(ig_seq)
{
    $.ajax({
        method: 'post',
        url: '/selfmake/get_guest_info/' + ig_seq,
        dataType: 'json',
        success: function(data) {
            if ( !$('.guest_form_wrapper').is(':visible') )
                $('.guest_form_wrapper').show();

            $('#ig_seq').val(ig_seq);
            $('#ig_mode').val('delete');
            $('#ig_name').val(data.ig_name);
            $('#ig_message').val(data.ig_message);
            $('#btn_guest_regist').text('축하 메시지 삭제');
        }
    });
}

// 방명록 가져오기
function self_guest_list(in_seq, page)
{
    $.ajax({
        method: 'post',
        url: '/selfmake/get_guest/' + in_seq + '/' + page,
        dataType: 'html',
        success: function(data) {
            $('.guest_list_wrapper').html(data);
            $('#ig_message, [name=ig_reply]').emojioneArea();
        }
    });
}

// 방명록 처리 리턴 메시지
function self_guest_return_message(msg, in_seq)
{
    alert(msg);
    guest_reset();
    self_guest_list(in_seq, 0);
}

function self_guest_reply(button, ig_seq, target)
{
    self_guest_reply_mode(button, ig_seq, target, 'regist', '답글 등록');
}

function self_guest_reply_modify(button, ig_seq, target)
{
    self_guest_reply_mode(button, ig_seq, target, 'modify', '답글 수정');
}

function self_guest_reply_delete(button, ig_seq, target)
{
    self_guest_reply_mode(button, ig_seq, target, 'delete', '답글 삭제');
}

function self_guest_reply_mode(button, ig_seq, target, mode, text)
{    
    $('.guest_reply_form_wrapper').hide();
    var frm = $(button).closest('li').find('.guest_reply_form_wrapper');
    if ( target == 'groom' )
        frm.find('.reply_type').removeClass('bride').addClass('groom');
    else if ( target == 'bride' )
        frm.find('.reply_type').removeClass('groom').addClass('bride');
    frm.find('[name=target]').val(target);
    frm.find('[name=reply_mode]').val(mode);
    frm.find('.btn_guest_reply_action').text(text);

    if ( mode != 'regist' )
    {
        $.ajax({
            method: 'post',
            url: '/selfmake/get_guest_info/' + ig_seq,
            dataType: 'json',
            success: function(data) {
                var reply = ( target == 'groom' ) ? data.ig_reply : data.ig_reply2;
                frm.find('[name=ig_reply]').val(reply);
                frm.show();
            }
        });
    }    
    else {
        frm.find('[name=ig_reply]').val('');
        frm.show();
    }
}

// 방명록 필드 리셋
function guest_reset()
{
    $('#ig_mode').val('regist');
    $('#ig_seq').val('');
    $('#ig_name').val('');
    $('#ig_password').val('');
    $('#ig_message').val('');
    if ( $('.emojionearea-editor').length > 0 )
        $('.emojionearea-editor').html('');
    $('#btn_guest_regist').text('축하 메시지 등록');
}

function bgmControl()
{
    if ( typeof( video ) == 'object' )
    {
        if ( typeof( video.pauseVideo ) == 'function' )
            video.pauseVideo();
        if ( typeof( video.pause ) == 'function' )
            video.pause();
    }

    if ( bgm.paused ) {
        $('#btn_bgm_control').find('img').attr('src', $('#btn_bgm_control').find('img').attr('src').replace(/off\.gif$/, 'on.gif'));
        bgm.play();
        parent.bgmButtonSet('play');
    }
    else {
        $('#btn_bgm_control').find('img').attr('src', $('#btn_bgm_control').find('img').attr('src').replace(/on\.gif$/, 'off.gif'));
        bgm.pause();
        parent.bgmButtonSet('pause');
    }           
}
$(function() {
    // console.log($('#ig_message'));
    if ( $('#ig_message').length > 0 ) {
		/*
        $('#ig_message').emojioneArea({
            // saveEmojisAs: 'image',
            pickerPosition: 'bottom',
            search: false,
            tones: false,
            filters: {
                recent: false,
                animals_nature: false,
                food_drink: false,
                activity: false,
                travel_places: false,
                objects: false,
                flags : false
            }
        }); 
		*/
    }
    if ( $('[name=ig_reply]').length > 0 ) {
		/*
        $('[name=ig_reply]').emojioneArea({
            // saveEmojisAs: 'image',
            pickerPosition: 'bottom',
            search: false,
            tones: false,
            filters: {
                recent: false,
                animals_nature: false,
                food_drink: false,
                activity: false,
                travel_places: false,
                objects: false,
                flags : false
            }
        });    
		*/
    }
});

function nl2br(str){  
    return str.replace(/\n/g, "<br />");  
}