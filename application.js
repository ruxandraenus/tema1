$(document).ready(function() {
                                $('#formular').submit(function(e) {
                                        e.preventDefault();
                                        
                                        var nume = $('#fnume').val();
                                        var prenume = $('#fprenume').val();
                                        var facultate = $('#ffacultate').val();
                                        
                                        $('#mytable tr:last').after('<tr>' + '<td>' + nume + '</td>' + '<td>' + prenume + '</td>' + '<td>' + facultate + '</td>' + '</tr>');
                                        $('td').click(function() {
                                                $(this).hide();
                                        });
                                });
                                
                                $('td').click(function() {
                                        $(this).hide();
                                });

			
                        });