// Conditional statements ( type=>switchcase)

var oneweek = prompt("Enter your day")



switch (oneweek) {
      case 'FRIDAY': case 'FRI' : case 'F':
        {
            document.write("Today is Friday" + oneweek)
            break;
        }

        case 'SATURDAY': case 'SAT' : case 'S':
            {
                document.write("Weekend started...!" + oneweek)
                break;
            }

            case 'SUNDAY': case 'SUN' : case 'S':
                {
                    document.write("...Sleeping day..." + oneweek)
                    break;
                }

                case 'MONDAY': case 'MON' : case 'M':
                    {
                        document.write("Its a start of working day..." + oneweek)
                        break;
                    }

                    case 'TUESDAY': case 'TUES' : case 'T':
                        {
                            document.write("Yet another working day..."+ oneweek )
                            break;
                        }

                        case 'WEDNESDAY': case 'WED' : case 'W':
                            {
                                document.write("Today is wednesday" + oneweek)
                                break;
                            }

                            case 'THURSDAY': case 'THURS' : case 'TH':
                                {
                                    document.write("One more day to go,today is Thursday" + oneweek)
                                    break;
                                }

              default:
                {
                    document.write("!!!.INVALID DAY.!!!"+ oneweek )
                }                  
}


   
