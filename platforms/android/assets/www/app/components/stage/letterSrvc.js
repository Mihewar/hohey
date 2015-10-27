/**
 *
 */
angular
    .module('app.services')
    .service('letterSrvc',function(){
    	var ll = [ {
			stage : [ {
						level : [ {
							letter : 'ሀ',
							color : '#00cccc'
						}, {
							letter : 'ለ',
							color : '#9900ff'
						}, {
							letter : 'ሐ',
							color : '#ff6633'
						}, {
							letter : 'መ',
							color : '#cc0033'
						}, {
							letter : 'ሠ',
							color : '#99cc33'
						},

						]
					}, {
						level : [ {
							letter : 'ረ',
							color : '#00cccc'
						}, {
							letter : 'ስ',
							color : '#9900ff'
						}, {
							letter : 'ሸ',
							color : '#ff6633'
						}, {
							letter : 'ቀ',
							color : '#cc0033'
						}, {
							letter : 'በ',
							color : '#99cc33'
						}, ]
					}, {
						level : [ {
							letter : 'ተ',
							color : '#00cccc'
						}, {
							letter : 'ቸ',
							color : '#9900ff'
						}, {
							letter : 'ኀ',
							color : '#ff6633'
						}, {
							letter : 'ነ',
							color : '#cc0033'
						}, {
							letter : 'ኘ',
							color : '#99cc33'
						}, ]
					}, {
						level : [ {
							letter : 'አ',
							color : '#00cccc'
						}, {
							letter : 'ከ',
							color : '#9900ff'
						}, {
							letter : 'ኸ',
							color : '#ff6633'
						}, {
							letter : 'ወ',
							color : '#cc0033'
						}, {
							letter : 'ዐ',
							color : '#99cc33'
						}, ]
					}, {
						level : [ {
							letter : 'ዘ',
							color : '#00cccc'
						}, {
							letter : 'ዠ',
							color : '#9900ff'
						}, {
							letter : 'የ',
							color : '#ff6633'
						}, {
							letter : 'ደ',
							color : '#cc0033'
						}, {
							letter : 'ጀ',
							color : '#99cc33'
						}, ]
					}, {
						level : [ {
							letter : 'ገ',
							color : '#00cccc'
						}, {
							letter : 'ጠ',
							color : '#9900ff'
						}, {
							letter : 'ጨ',
							color : '#ff6633'
						}, {
							letter : 'ጰ',
							color : '#cc0033'
						}, {
							letter : 'ጸ',
							color : '#99cc33'
						}, ]
					}, {
						level : [ {
							letter : 'ፀ',
							color : '#00cccc'
						}, {
							letter : 'ፈ',
							color : '#9900ff'
						}, {
							letter : 'ፐ',
							color : '#ff6633'
						}

						]

					}
				]
			}, {
			stage : [{
    				level : [ {
    					letter : 'ሀ',
    					color : '#00cccc'
    				}, {
    					letter : 'ሁ',
    					color : '#9900ff'
    				}, {
    					letter : 'ሂ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሃ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሄ',
    					color : '#ff6633'
    				}, {
    					letter : 'ህ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሆ',
    					color : '#ff6633'
    				}

    				]

    			}, {
    				level : [ {
    					letter : 'ለ',
    					color : '#00cccc'
    				}, {
    					letter : 'ሉ',
    					color : '#9900ff'
    				}, {
    					letter : 'ሊ',
    					color : '#ff6633'
    				}, {
    					letter : 'ላ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሌ',
    					color : '#ff6633'
    				}, {
    					letter : 'ል',
    					color : '#ff6633'
    				}, {
    					letter : 'ሎ',
    					color : '#ff6633'
    				}

    				]

    			}, {
    				level : [ {
    					letter : 'ሐ',
    					color : '#00cccc'
    				}, {
    					letter : 'ሑ',
    					color : '#9900ff'
    				}, {
    					letter : 'ሒ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሓ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሔ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሕ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሖ',
    					color : '#ff6633'
    				}

    				]

    			}, {
    				level : [ {
    					letter : 'መ',
    					color : '#00cccc'
    				}, {
    					letter : 'ሙ',
    					color : '#9900ff'
    				}, {
    					letter : 'ሚ',
    					color : '#ff6633'
    				}, {
    					letter : 'ማ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሜ',
    					color : '#ff6633'
    				}, {
    					letter : 'ም',
    					color : '#ff6633'
    				}, {
    					letter : 'ሞ',
    					color : '#ff6633'
    				}

    				]

    			}, {
    				level : [ {
    					letter : 'ሠ',
    					color : '#00cccc'
    				}, {
    					letter : 'ሡ',
    					color : '#9900ff'
    				}, {
    					letter : 'ሢ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሣ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሤ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሥ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሦ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ረ',
    					color : '#00cccc'
    				}, {
    					letter : 'ሩ',
    					color : '#9900ff'
    				}, {
    					letter : 'ሪ',
    					color : '#ff6633'
    				}, {
    					letter : 'ራ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሬ',
    					color : '#ff6633'
    				}, {
    					letter : 'ር',
    					color : '#ff6633'
    				}, {
    					letter : 'ሮ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ሰ',
    					color : '#00cccc'
    				}, {
    					letter : 'ሱ',
    					color : '#9900ff'
    				}, {
    					letter : 'ሲ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሳ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሴ',
    					color : '#ff6633'
    				}, {
    					letter : 'ስ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሶ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ሸ',
    					color : '#00cccc'
    				}, {
    					letter : 'ሹ',
    					color : '#9900ff'
    				}, {
    					letter : 'ሺ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሻ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሼ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሽ',
    					color : '#ff6633'
    				}, {
    					letter : 'ሾ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ቀ',
    					color : '#00cccc'
    				}, {
    					letter : 'ቁ',
    					color : '#9900ff'
    				}, {
    					letter : 'ቂ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቃ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቄ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቅ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቆ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'በ',
    					color : '#00cccc'
    				}, {
    					letter : 'ቡ',
    					color : '#9900ff'
    				}, {
    					letter : 'ቢ',
    					color : '#ff6633'
    				}, {
    					letter : 'ባ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቤ',
    					color : '#ff6633'
    				}, {
    					letter : 'ብ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቦ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ቨ',
    					color : '#00cccc'
    				}, {
    					letter : 'ቩ',
    					color : '#9900ff'
    				}, {
    					letter : 'ቪ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቫ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቬ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቭ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቮ',
    					color : '#ff6633'
    				}

    				]
				}, { 
    				level : [ {
    					letter : 'ተ',
    					color : '#00cccc'
    				}, {
    					letter : 'ቱ',
    					color : '#9900ff'
    				}, {
    					letter : 'ቲ',
    					color : '#ff6633'
    				}, {
    					letter : 'ታ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቴ',
    					color : '#ff6633'
    				}, {
    					letter : 'ት',
    					color : '#ff6633'
    				}, {
    					letter : 'ቶ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ቸ',
    					color : '#00cccc'
    				}, {
    					letter : 'ቹ',
    					color : '#9900ff'
    				}, {
    					letter : 'ቺ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቻ',
    					color : '#ff6633'
    				}, {
    					letter : 'ቼ',
    					color : '#ff6633'
    				}, {
    					letter : 'ች',
    					color : '#ff6633'
    				}, {
    					letter : 'ቾ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ኅ',
    					color : '#00cccc'
    				}, {
    					letter : 'ኁ',
    					color : '#9900ff'
    				}, {
    					letter : 'ኂ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኃ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኄ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኀ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኆ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ነ',
    					color : '#00cccc'
    				}, {
    					letter : 'ኑ',
    					color : '#9900ff'
    				}, {
    					letter : 'ኒ',
    					color : '#ff6633'
    				}, {
    					letter : 'ና',
    					color : '#ff6633'
    				}, {
    					letter : 'ኔ',
    					color : '#ff6633'
    				}, {
    					letter : 'ን',
    					color : '#ff6633'
    				}, {
    					letter : 'ኖ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ኘ',
    					color : '#00cccc'
    				}, {
    					letter : 'ኙ',
    					color : '#9900ff'
    				}, {
    					letter : 'ኚ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኛ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኜ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኝ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኞ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'አ',
    					color : '#00cccc'
    				}, {
    					letter : 'ኡ',
    					color : '#9900ff'
    				}, {
    					letter : 'ኢ',
    					color : '#ff6633'
    				}, {
    					letter : 'አ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኤ',
    					color : '#ff6633'
    				}, {
    					letter : 'እ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኦ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ከ',
    					color : '#00cccc'
    				}, {
    					letter : 'ኩ',
    					color : '#9900ff'
    				}, {
    					letter : 'ኪ',
    					color : '#ff6633'
    				}, {
    					letter : 'ካ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኬ',
    					color : '#ff6633'
    				}, {
    					letter : 'ክ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኮ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ኸ',
    					color : '#00cccc'
    				}, {
    					letter : 'ኹ',
    					color : '#9900ff'
    				}, {
    					letter : 'ኺ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኻ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኼ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኽ',
    					color : '#ff6633'
    				}, {
    					letter : 'ኾ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ወ',
    					color : '#00cccc'
    				}, {
    					letter : 'ዉ',
    					color : '#9900ff'
    				}, {
    					letter : 'ዊ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዋ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዌ',
    					color : '#ff6633'
    				}, {
    					letter : 'ው',
    					color : '#ff6633'
    				}, {
    					letter : 'ዎ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ዐ',
    					color : '#00cccc'
    				}, {
    					letter : 'ዑ',
    					color : '#9900ff'
    				}, {
    					letter : 'ዒ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዓ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዔ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዕ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዖ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ዘ',
    					color : '#00cccc'
    				}, {
    					letter : 'ዙ',
    					color : '#9900ff'
    				}, {
    					letter : 'ዚ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዛ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዜ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዝ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዞ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ዠ',
    					color : '#00cccc'
    				}, {
    					letter : 'ዡ',
    					color : '#9900ff'
    				}, {
    					letter : 'ዢ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዣ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዤ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዥ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዦ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'የ',
    					color : '#00cccc'
    				}, {
    					letter : 'ዩ',
    					color : '#9900ff'
    				}, {
    					letter : 'ዪ',
    					color : '#ff6633'
    				}, {
    					letter : 'ያ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዬ',
    					color : '#ff6633'
    				}, {
    					letter : 'ይ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዮ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ደ',
    					color : '#00cccc'
    				}, {
    					letter : 'ዱ',
    					color : '#9900ff'
    				}, {
    					letter : 'ዲ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዳ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዴ',
    					color : '#ff6633'
    				}, {
    					letter : 'ድ',
    					color : '#ff6633'
    				}, {
    					letter : 'ዶ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ጀ',
    					color : '#00cccc'
    				}, {
    					letter : 'ጁ',
    					color : '#9900ff'
    				}, {
    					letter : 'ጂ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጃ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጄ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጅ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጆ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ገ',
    					color : '#00cccc'
    				}, {
    					letter : 'ጉ',
    					color : '#9900ff'
    				}, {
    					letter : 'ጊ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጋ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጌ',
    					color : '#ff6633'
    				}, {
    					letter : 'ግ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጎ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ጠ',
    					color : '#00cccc'
    				}, {
    					letter : 'ጡ',
    					color : '#9900ff'
    				}, {
    					letter : 'ጢ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጣ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጤ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጥ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጦ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ጨ',
    					color : '#00cccc'
    				}, {
    					letter : 'ጩ',
    					color : '#9900ff'
    				}, {
    					letter : 'ጪ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጫ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጬ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጭ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጮ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ጰ',
    					color : '#00cccc'
    				}, {
    					letter : 'ጱ',
    					color : '#9900ff'
    				}, {
    					letter : 'ጲ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጳ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጴ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጵ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጶ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ጸ',
    					color : '#00cccc'
    				}, {
    					letter : 'ጹ',
    					color : '#9900ff'
    				}, {
    					letter : 'ጺ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጻ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጼ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጽ',
    					color : '#ff6633'
    				}, {
    					letter : 'ጾ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ፀ',
    					color : '#00cccc'
    				}, {
    					letter : 'ፁ',
    					color : '#9900ff'
    				}, {
    					letter : 'ፂ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፃ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፄ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፅ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፆ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ፈ',
    					color : '#00cccc'
    				}, {
    					letter : 'ፉ',
    					color : '#9900ff'
    				}, {
    					letter : 'ፊ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፋ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፌ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፍ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፎ',
    					color : '#ff6633'
    				}

    				]
				}, {
    				level : [ {
    					letter : 'ፐ',
    					color : '#00cccc'
    				}, {
    					letter : 'ፑ',
    					color : '#9900ff'
    				}, {
    					letter : 'ፒ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፓ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፔ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፕ',
    					color : '#ff6633'
    				}, {
    					letter : 'ፖ',
    					color : '#ff6633'
    				}

    				]
				}]
			}, {
			stage : [ {
						level : [ {
							letter : 'ሏ',
							color : '#00cccc'
						}, {
							letter : 'ሟ',
							color : '#9900ff'
						}, {
							letter : 'ሯ',
							color : '#ff6633'
						}, {
							letter : 'ሷ',
							color : '#cc0033'
						}, {
							letter : 'ሿ',
							color : '#99cc33'
						},

						]
					},{
						level : [ {
							letter : 'ቧ',
							color : '#00cccc'
						}, {
							letter : 'ቷ',
							color : '#9900ff'
						}, {
							letter : 'ቿ',
							color : '#ff6633'
						}, {
							letter : 'ኗ',
							color : '#cc0033'
						}, {
							letter : 'ኟ',
							color : '#99cc33'
						},

						]
					},{
						level : [ {
							letter : 'ኳ',
							color : '#00cccc'
						}, {
							letter : 'ዟ',
							color : '#9900ff'
						}, {
							letter : 'ዧ',
							color : '#ff6633'
						}, {
							letter : 'ዷ',
							color : '#cc0033'
						}, {
							letter : 'ጇ',
							color : '#99cc33'
						},

						]
					},{
						level : [ {
							letter : 'ጧ',
							color : '#00cccc'
						}, {
							letter : 'ጯ',
							color : '#9900ff'
						}, {
							letter : 'ጿ',
							color : '#ff6633'
						}, {
							letter : 'ፏ',
							color : '#cc0033'
						}

						]
					}
					
				]
			},{
			stage : [ {
						level : [ {
							letter : '፩',
							color : '#00cccc'
						}, {
							letter : '፪',
							color : '#9900ff'
						}, {
							letter : '፫',
							color : '#ff6633'
						}, {
							letter : '፬',
							color : '#cc0033'
						}, {
							letter : '፭',
							color : '#99cc33'
						},

						]
					},{
						level : [ {
							letter : '፮',
							color : '#00cccc'
						}, {
							letter : '፯',
							color : '#9900ff'
						}, {
							letter : '፰',
							color : '#ff6633'
						}, {
							letter : '፱',
							color : '#cc0033'
						}, {
							letter : '፲',
							color : '#99cc33'
						},

						]
					},{
						level : [ {
							letter : '፳',
							color : '#00cccc'
						}, {
							letter : '፴',
							color : '#9900ff'
						}, {
							letter : '፵',
							color : '#ff6633'
						}, {
							letter : '፶',
							color : '#cc0033'
						}, {
							letter : '፷',
							color : '#99cc33'
						},

						]
					},{
						level : [ {
							letter : '፸',
							color : '#00cccc'
						}, {
							letter : '፹',
							color : '#9900ff'
						}, {
							letter : '፺',
							color : '#ff6633'
						}, {
							letter : '፻',
							color : '#cc0033'
						}
						]
					}
				]
			}
		];
    	return {
    		getLetter:function(s,l,i){
				var q = ll[s].stage[l].level[i].letter;
    			return q;
    		},
			getColor:function(s,l,i){
				var q = ll[s].stage[l].level[i].color;
    			return q;
    		}
    	}
    });