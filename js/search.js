$(function(){

    // 주소 데이터 로딩
    var data = [];
    $.getJSON('data.json', function(result){
      console.log(result, typeof result);
      $.each(result, function(i, field){
        data.push(field);
      })
      console.log('data= ', data);
      show_list();
    });
  
    // 주소 목록 출력
    function show_list(){
      var list = '';
      var url = '#';
      $(data).each(function(i, d){
        url = data[i].url;
        list += '<li><a href="' + url + '">' + data[i].name;
        list += '<p>' + data[i].addr + '</p>';
        list += '</a></li>';
      });
      $('#address_list').html(list);
    }
  
    // 검색창 검색
    function search_list(txt){
      if(txt == '') {
        $('#address_list').html('검색어를 입력을 해주세요.');
        return false;
      }
  
      var list = '';
      var url = '#';
      $('#address_list').empty();
      for(var i in data){
        if(data[i].name.indexOf(txt) != -1 || data[i].addr.indexOf(txt) != -1){
          url = data[i].url;
          list += '<li><a href="' + url + '">' + data[i].name;
          list += '<p>' + data[i].addr + '</p>';
          list += '</a></li>';
        } 
      }
      $('#address_list').append(list);
  
      if($('#address_list').html() == ''){
        $('#address_list').html('검색 결과가 없습니다.');
      } 
      return false;
    }
  
    // 선택목록 검색
    function select_list(txt){
      console.log(txt);
      var list = '';
      var url = '#';
      $('#address_list').empty();
  
      for(var i in data){
        if(data[i].addr.indexOf(txt) != -1){
          url = data[i].url;
          list += '<li><a href="' + url + '">' + data[i].name;
          list += '<p>' + data[i].addr + '</p>';
          list += '</a></li>';
          $('#address_list').html(list);
        } 
      }
    }    
  
    // 목록 선택
    $('#city').on('change', function(){
      var i = $(this).prop('selectedIndex');
      console.log(i);
      var txt = $(this).find('option').eq(i).text();
      select_list(txt);
      // $('#map iframe').attr('src', data[i-1].url);
    })
  
    // 검색
    $('#submit').on('click', function(){
      var txt = $('#search').val();
      search_list(txt);
      return false;
    });
  
    $('#address_list').on('click', 'a', function(){
      var url = $(this).attr('href');
      $('#map iframe').attr('src', url);
      return false;
    });
  
  }); // end$()