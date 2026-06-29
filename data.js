window.APP_DATA = {
  "course": "CHM3120",
  "unit": "Unit 2 - Section 3",
  "title": "Quality Assurance and Calibration",
  "repo": "chm3120-unit2-section3-qa",
  "kind": "qa",
  "slideCount": 47,
  "chunks": [
    {
      "id": "chunk1",
      "label": "QA Foundations",
      "range": "1-10",
      "start": 1,
      "end": 10,
      "goals": [
        "Choose a calibration strategy",
        "Interpret regression and figures of merit",
        "Make QA/QC accept-reject decisions"
      ],
      "slides": [
        {
          "number": 1,
          "title": "CHM 3120: Introduction to Analytical Chemistry",
          "text": "CHM 3120: Introduction to Analytical Chemistry\nUnit 2 - Section 3:\nQuality Assurance & Figures of\nMerit for Analytical Methods\nChapter 6\nS UMM ER 2 0 2 6\nDR . ALI SH AFI EE\nali.shafiee@ufl.edu"
        },
        {
          "number": 2,
          "title": "Quality Assurance and Calibrations",
          "text": "Quality Assurance and Calibrations\nWhat is quality assurance (QA)?\nHow do we compare analytical methods?\nWhat constitutes signal and what constitutes noise?\nHow do we pose a scientific question?\n2\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 3,
          "title": "Basics of Quality Assurance",
          "text": "Basics of Quality Assurance\nFalse positives vs false negatives\nSuppose 0.2% of people have a particular type of cancer and an analytical test\nhas a 99% probability of detecting cancer with a 1% false positive rate.\nAmongst 1M people, 0.2% (2,000) then likely have cancer.\nIf 1M are screen, the test will accurately determine that 99% of those 2,000\n(1,980) have cancer. But 1% (20) will be incorrectly told they are cancer free\n(false negative).\nIn the remaining 998,000 people, a 1% false positive rate identifies cancer in\n9,980 healthy people. So, of the positive results, only 1,980/9,980 (17%) are\ntrue positives. The remaining 83% are false positives.\n3\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 4,
          "title": "Basics of Quality Assurance",
          "text": "Basics of Quality Assurance\nFalse positives vs false negatives\nAcceptable false positive and false negative rates are application dependent\nEx. You are testing that a contaminant in drinking water is below a legal limit:\n• A false positive says that the concentration exceeds the legal limit when in fact the\nconcentration is below the legal limit\n• A false negative says that the concentration is below the limit when it is actually above\nthe limit\nA low rate of false negatives is more important than a low rate of false positives\nIt would be worse to certify that contaminated water is safe than to certify that safe water\nis contaminated\n4\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 5,
          "title": "Quality Assurance is Challenging",
          "text": "Quality Assurance is Challenging\nVitamin C concentration in\na tablet manufacturing line\n95.5%\n~\n99.7%\nC.I.\n5\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 6,
          "title": "Quality Assurance is Challenging",
          "text": "Quality Assurance is Challenging\n95% C.I.\nH. Marchandise, Fresenius Journal Analytical Chemistry, 345, 82-86 (1993) 6\nCHM3120 | Ali Shafiee | UF"
        }
      ]
    },
    {
      "id": "chunk2",
      "label": "Calibration Methods",
      "range": "11-20",
      "start": 11,
      "end": 20,
      "goals": [
        "Choose a calibration strategy",
        "Interpret regression and figures of merit",
        "Make QA/QC accept-reject decisions"
      ],
      "slides": [
        {
          "number": 11,
          "title": "Calibration Curve",
          "text": "Calibration Curve\nConcentration Peak Area\n0.25 25\n0.50 50\n0.75 75\n1.0 100\n11\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 12,
          "title": "Linear Regression",
          "text": "Linear Regression\nDue to indeterminate errors, not all data points fall perfectly on the line. we use regression analysis\nto find the best-fit line through the data and for specifying the uncertainties.\nThe Least-Squares Method\nAssumption #1: There is a linear relationship\nbetween the measured response y and the standard\nanalyte concentration x.\nThe regression model mathematical describe this\nassumption as:\n𝑦 = 𝑚𝑥 + 𝑏\n12\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 13,
          "title": "Linear Regression",
          "text": "Linear Regression\nDue to indeterminate errors, not all data points fall perfectly on the line. we use regression analysis\nto find the best-fit line through the data and for specifying the uncertainties.\nThe Least-Squares Method\nAssumption #2: any deviation of the individual\npoints from the straight line results from error in the\nindividual measurements.\nThat is, assume that there is no error in x values of\nthe points (concentrations).\n𝑦 = 𝑚𝑥 + 𝑏\n13\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 14,
          "title": "Least Squares",
          "text": "Least Squares\nThe goodness of fit of your best fit line is represented by R2. This is called\nthe co-efficient of determination. The closer it is to 1, the better the value.\n800 700 800\n700 y = 9.991x + 1.2049 600 y = 8.4799x + 20.775 700\n600 R² = 1 600\n500 R² = 0.8248\n500 500\n400\nla\nn 400\nla\nn\nla\nn 400\ng g g\niS iS 300 iS\n300 300\n200 y = 1.1512x + 289.88\n200 200\n100 100 100 R² = 0.0122\n0 0 0\n0 20 40 60 80 0 20 40 60 80 0 20 40 60 80\nConcentration Concentration Concentration\nExercises in Excel: Link\n14\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 15,
          "title": "Practice Problem: Calibration Curve",
          "text": "Practice Problem: Calibration Curve\nDetermine the concentration of benzene with a peak area of 184 using a calibration curve. The external\nstandards gave the following responses:\nConcentration (mg/ml) Peak Area\n0.0100 40\n0.0500 75\n0.100 124\n0.150 200\n0.200 240\n0.250 325\n15\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 16,
          "title": "Practice Problem: Calibration Curve",
          "text": "Practice Problem: Calibration Curve\n𝑦 = 1176.5𝑥 + 18.316\nUnknown gives a response of 184\nSo y = 184\n184 = 1176.5𝑥 + 18.316\n𝑚𝑔\n𝑥 = 0.14083\n𝑚𝑙\n𝑚𝑔\n𝑥 = 0.141\n𝑚𝑙\n16\nCHM3120 | Ali Shafiee | UF"
        }
      ]
    },
    {
      "id": "chunk3",
      "label": "Regression and Figures of Merit",
      "range": "21-30",
      "start": 21,
      "end": 30,
      "goals": [
        "Choose a calibration strategy",
        "Interpret regression and figures of merit",
        "Make QA/QC accept-reject decisions"
      ],
      "slides": [
        {
          "number": 21,
          "title": "Limit of Detection",
          "text": "Limit of Detection\nThe limit of detection (LOD): the lowest concentration we can report with a defined level of\nconfidence; meaning it's significantly different from a blank measurement.\n𝑘 𝑠\n𝑏𝑙𝑎𝑛𝑘\n𝐿𝑂𝐷 = ; (k = 3)\n𝑚\n𝑘 𝑠\n𝑏𝑙𝑎𝑛𝑘\n𝐿𝑂𝑄 = ; (k = 10)\n𝑚\n21\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 22,
          "title": "Sensitivity",
          "text": "Sensitivity\nCalibration sensitivity is the slope of the calibration curve and remains constant when the curve\nis linear. However, it doesn't reflect how well we can distinguish between concentrations. For\nthat, we use analytical sensitivity: the slope divided by the standard deviation of the signal at a\ngiven concentration. Unlike calibration sensitivity, analytical sensitivity often depends on\nconcentration.\n400\n350 y = 35.528x + 3.5686\nConcentration Signal 1 Signal 2 R² = 0.9998\n300\n0.1 5 10\n250\n0.5 10 20\nla\nn 200\n1 20 40 g iS\ny = 17.764x + 1.7843\n150\n2.5 45 90 R² = 0.9998\n5 90 180 100\n10 180 360 50\n0\n0 1 2 3 4 5 6 7 8 9 10 11\nConcentration 22\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 23,
          "title": "Dynamic Range vs. Linear Dynamic Range",
          "text": "Dynamic Range vs. Linear Dynamic Range\nDynamic Range\nThe full range of analyte concentrations where the instrument gives a measurable response—not\nnecessarily linear.\nIt extends from the LOD (or LOQ) to the point where the signal plateaus or becomes unreliable (e.g.,\ndue to saturation).\nLinear Range\nThe portion of the dynamic range where the\nresponse is directly proportional to concentration.\nThe lower limit LOD (or LOQ).\nThe upper limit is where the signal or slope\ndeviates from linearity (LOL)—usually by more\nthan 5%.\nDeviations at high concentrations often result\nfrom nonideal detector behavior or chemical\neffects.\n23\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 24,
          "title": "External Standard Addition Method (ExSTA)",
          "text": "External Standard Addition Method (ExSTA)\nHelps correct for matrix effects: ideal when we\nknow what analyte we're targeting, but the\nsample composition is complex, variable, or\nunknown, make it difficult or impossible to\nprepare standards or blanks that match the\nsample matrix: interferences from other\ncomponents that affect the analytical signal or\nslope of the calibration curve.\n24\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 25,
          "title": "ExSTA: Single-Point Method",
          "text": "ExSTA: Single-Point Method\nThe signal of the unknown sample is measured first. A known amount of standard is then\nadded to the same solution and the signal is measured again. Because analytical signal (I) is\nproportional to concentration (C): 𝐼 ∝ 𝐶 (𝑜𝑟 𝐼 = 𝑘𝐶)\nSignal from the original sample: 𝐼 = 𝑘[𝑋]\n𝑋 𝑖\nSignal after adding standard: 𝐼 = 𝑘([𝑆] +[𝑋] )\n𝑆+𝑋 𝑓 𝑓\n[𝑿] 𝑰\n𝒊 𝑿\n=\nTaking the ratio of the two signals:\n[𝑺] +[𝑿] 𝑰\n𝒇 𝒇 𝑺+𝑿\nIn this method we need to account for dilutions for [𝑆] and [𝑋] :\n𝑓 𝑓\n𝑽 𝑽\n𝒔 𝒙\n[𝑺] = [𝑺] [𝑿] = [𝑿]\n𝒇 𝒊 𝒇 𝒊\n𝑽 𝑽\n[𝑋] =initial concentration of sample\n𝐼 =intensity/signal from sample\n𝑖\n𝑋\n[𝑆] =final concentration of standard\n𝐼 =intensity/signal from sample and standard\n𝑓\n𝑆+𝑋\n[𝑋] =final concentration of sample V = total volume after addition 25\n𝑓\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 26,
          "title": "ExSTA: Single-Point Method",
          "text": "ExSTA: Single-Point Method\nThe signal of the unknown sample is measured first. A known amount of standard is then\nadded to the same solution and the signal is measured again. Because analytical signal (A) is\nproportional to concentration (𝐶 ): A ∝ 𝐶 (𝑜𝑟 𝐴 = 𝑘𝐶 )\n𝑢 𝑢 𝑢\nSignal from the original sample: 𝐴 = 𝑘𝐶\n1 𝑢\nSignal after adding standard: 𝐴 = 𝑘(𝐶 𝑉 + 𝐶 𝑉 )/𝑉\n2 𝑢 𝑢 𝑠 𝑠 𝑡\n𝑨 𝑪 𝑽\n𝟏 𝒔 𝒔\n𝑪 =\nSolving for the unknown concentration:\n𝒖\n𝑨 𝑽 − 𝑨 𝑽\n𝟐 𝒕 𝟏 𝒖\nIn this form, the volume correction is already included in the equation, so dilution\ndoes not need to be handled separately.\n𝐶 : concentration of analyte in the unknown\n𝑢 𝑉 : volume of standard added\n𝐶 : concentration of standard 𝑠\n𝑠 𝑉 : volume of unknown\n𝐴 & 𝐴 (𝑜𝑟 𝑆): measured signals 𝑢\n1 2 𝑉 : total volume after addition (𝑉 +𝑉 )\n𝐾 : proportionality constant 𝑡 𝑢 𝑠 26\nCHM3120 | Ali Shafiee | UF"
        }
      ]
    },
    {
      "id": "chunk4",
      "label": "Control Decisions",
      "range": "31-40",
      "start": 31,
      "end": 40,
      "goals": [
        "Choose a calibration strategy",
        "Interpret regression and figures of merit",
        "Make QA/QC accept-reject decisions"
      ],
      "slides": [
        {
          "number": 31,
          "title": "ExSTA: Multiple-Point Method",
          "text": "ExSTA: Multiple-Point Method\nMultiple Solutions Successive Additions\nFeature\n(Constant Final Volume) to One Solution\nSeparate flasks prepared with Standard added repeatedly to\nSetup\ndifferent standard additions the same sample solution\nOne solution measured\nNumber of solutions Several independent solutions\nrepeatedly\nTotal volume Constant final volume Changes after each addition\nDilution effect Already controlled Must be corrected for\nGraphical method accounting for\nData analysis Linear regression calibration curve\ndilution\nMost common implementation in Instrument methods where\nTypical use\nanalytical chemistry repeated measurement is easy\n31\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 32,
          "title": "Multiple Solutions with Constant Final Volume",
          "text": "Multiple Solutions with Constant Final Volume\nIn this method, several separate solutions are prepared, each containing the\nsame volume of sample and increasing amounts of standard. Each solution is\nthen diluted to the same final volume before measuring the signal.\nProcedure:\n1. Pipette the same volume of unknown sample into several volumetric flasks.\n2. Add different volumes of standard solution to each flask.\n3. Dilute each flask to the same final volume with solvent and mix.\n4. Measure the signal for each solution.\nBecause every solution is diluted to the same final volume,\nthe dilution factor is constant and the analytical signal\nvaries linearly with the amount of added standard.\n32\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 33,
          "title": "Multiple Solutions with Constant Final Volume",
          "text": "Multiple Solutions with Constant Final Volume\n𝒌𝑪 𝒌𝑪 𝑽\n𝑽 𝑽 Rearranging the signal 𝒔 𝒖 𝒖\n𝒖 𝒔 𝑺 = 𝑽 +\n𝑺 = 𝒌 𝑪 + 𝑪 equation gives a linear form 𝒔\n𝑽 𝑽\n𝒖 𝒔\n𝑽 𝑽 𝒇 𝒇\n𝒇 𝒇\nwhich matches → 𝒚 = 𝒎𝒙 + 𝒃\nFrom the slope and intercept of the calibration line\n𝒃𝑪\n𝒔\n𝑪 =\n𝒙\n𝒎𝑽\n𝒖\nThe x-intercept of the calibration curve corresponds to\n𝑪 𝑽\n𝒖 𝒖\n𝑿 = −\n𝒊𝒏𝒕\n𝑪\n𝒔\nV : the same volume of unknown sample\nu\nV : the same final volume in each flask\nf\nV : increasing volumes of standard 33\nCHM3120 | Ali Shafiee | UF s"
        },
        {
          "number": 34,
          "title": "Practice Problem",
          "text": "Practice Problem\nVolume of standard added\nAbsorbance\n(mL)\nA student analyzes an environmental water sample containing Cu2+ 0.00 0.215\nusing UV–Vis spectroscopy at 620 nm. To correct for matrix effects each 2.00 0.339\n25.00 mL aliquot of the sample is transferred to a 50.00 mL volumetric\n4.00 0.461\nflask, and standard Cu2+ solution (10.0 ppm) is added in increasing\n6.00 0.583\namounts before dilution to the mark. Find the unknown concentration\n8.00 0.709\nof Cu2+ in the sample (C ).\nu\n0.8\nMethod 1: Using the slope and intercept\n0.7\ny = 0.0616x + 0.215\n0.6\nR2 = 1\nbC (0.215) × (10.0 ppm) 0.5\ns\n2+\nC = = ≈ 1.40 𝑝𝑝𝑚 𝐶𝑢\nx 0.4\nmV 0.0616 𝑚𝐿−1 × (25.00 mL)\nu\n0.3\n0.2\n0.1\n0\n-5 -4.5 -4 -3.5 -3 -2.5 -2 -1.5 -1 -0.5 0 0.5 1 1.5 2 2.5 3 3.5 4 4.5 5 5.5 6 6.5 7 7.5 8 8.5 9\n-0.1\n34\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 35,
          "title": "Practice Problem",
          "text": "Practice Problem\n0.8\n0.7\ny = 0.0616x + 0.215\nMethod 2: Using the x-intercept (𝑋 ):\n𝑖𝑛𝑡 0.6 R2 = 1\n(The x-intercept can be calculated using Excel or\n0.5\ndetermined from the equation of the line.):\n0.4\nA = 0.0616V + 0.215\n0.3\ns\n→ 𝑠𝑒𝑡 𝐴 = 0 →\n0.2\n0.1\n0.215\n𝑉 = − = −3.49 𝑚𝐿 = 𝑋\n𝑠 𝑖𝑛𝑡 0\n0.0616\n-5 -4.5 -4 -3.5 -3 -2.5 -2 -1.5 -1 -0.5 0 0.5 1 1.5 2 2.5 3 3.5 4 4.5 5 5.5 6 6.5 7 7.5 8 8.5 9\n-0.1\n𝐶 𝑉 𝑋 𝐶\n𝑢 𝑢 𝑖𝑛𝑡 𝑠\n𝑋 = − → 𝑠𝑜𝑙𝑣𝑒 𝑓𝑜𝑟 𝐶 → 𝐶 = −\n𝑖𝑛𝑡 𝑢 𝑢\n𝐶 𝑉\n𝑠 𝑢\n−3.49 𝑚𝐿 10.0 𝑝𝑝𝑚\n𝐶 = − = 1.40 𝑝𝑝𝑚\n𝑢\n(25.0 𝑚𝐿)\n35\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 36,
          "title": "Successive Additions to One Solution",
          "text": "Successive Additions to One Solution\nIn this method, the standard solution is added\nsuccessively to the same sample solution.\nProcedure:\n1. Measure the signal of the original sample.\n2. Add a small volume of standard.\n3. Measure the signal again.\n4. Repeat several additions.\nLink 36\nCHM3120 | Ali Shafiee | UF"
        }
      ]
    },
    {
      "id": "chunk5",
      "label": "Validation Practice",
      "range": "41-47",
      "start": 41,
      "end": 47,
      "goals": [
        "Choose a calibration strategy",
        "Interpret regression and figures of merit",
        "Make QA/QC accept-reject decisions"
      ],
      "slides": [
        {
          "number": 41,
          "title": "Internal Standard",
          "text": "Internal Standard\nProvides an independent signal which can\nbe used for normalization\nKnown concentration of Internal standard\nadded to each sample and calibration sample\nRatio of standard response to analyte helps to\novercome discrepancies between injections\n(random error)\nCurve of ratios of peak area (sample:IS) plotted\nvs [Sample]:[IS]\n41\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 42,
          "title": "Internal Standard",
          "text": "Internal Standard\nProvides an independent signal which can\nS\nbe used for normalization i\ng\nn\na\nl\nr\na\nt\nKnown concentration of Internal standard i\no\n(\nS\nadded to each sample and calibration sample\na\nm\np\nl\ne\n:\nI\nRatio of standard response to analyte helps S\n)\nto overcome discrepancies between\ninjections (random error)\nConcentration ratio ([Sample]:[IS])\nCurve of ratios of peak area (sample:IS)\nplotted vs [Sample]:[IS]\n42\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 43,
          "title": "Internal Standard",
          "text": "Internal Standard\nBenzene (0.1 mg/ml) Toluene (0.1 mg/ml) Ratio (PA /PA )\nB T\n105 105 1\n115 115 1\n97.0 97.0 1\nDifferences in repeat benzene measurements\nare seen in the internal standard toluene\n43\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 44,
          "title": "Internal Standard",
          "text": "Internal Standard\nA = signal from analyte\n𝐴 𝐴 X\n𝑋 𝑆 [X] =concentration of analyte\nf\n= 𝐹\nA = signal from standard\nS\n[𝑋] [𝑆]\n[S] =concentration of standard\n𝑓 𝑓\nf\nF= response factor\nUse a standard and internal standard of known concentration to calculate the\nresponse factor, F.\nUse F to calculate the concentration of your sample with the internal\nstandard at the same concentration.\n44\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 45,
          "title": "Practice Problem",
          "text": "Practice Problem\nIn a preliminary experiment, a solution containing 0.0837 M X and 0.0666 M S, gave peak areas of\nA =432 and A =347 (Areas are measured in arbitrary units by the instrument.) To analyze the\nx s\nunknown, 10.0 mL of 0.146 M S were added to 10.0 mL of unknown, and the mixture was diluted to\n25.0 mL in a volumetric flask. This mixture gave the below chromatogram, for which A =553 and\nx\nA =582. Find the concentration of X in the unknown.\ns\n𝐴 𝐴 432 347\n𝑋 𝑆\n= 𝐹 = = 𝐹 → 𝐹 = 0.9906\n[𝑋] [𝑆] 0.0837 𝑀 0.0666 𝑀\n𝑓 𝑓\n10 𝑚𝐿\nDilution factor: [𝑆] = 0.146 𝑀 = 0.0584 𝑀\n𝑓\n25 𝑚𝐿\n553 582\n= 0.9906 → [𝑋] = 0.05602 𝑀\n𝑓\n[𝑋] 0.0584 𝑀\n𝑓\nBecause X was diluted from 10.0 to 25.0 mL when the mixture with S was\nprepared, the original concentration of X in the unknown:\n25 𝑚𝐿\n[𝑋] = 0.05602 𝑀 = 0.140 𝑀\n10 𝑚𝐿 45\nCHM3120 | Ali Shafiee | UF"
        },
        {
          "number": 46,
          "title": "Internal Standard",
          "text": "Internal Standard\nInternal standards are especially useful for analyses in which the quantity of sample analyzed\nor the instrument response varies slightly from run to run.\nWhat would be some good characteristics of an internal standard?\nWell-resolved from analyte\nStable\nPure\nHigh response from detector\nNever found in sample\nStructurally similar to analyte\n46\nCHM3120 | Ali Shafiee | UF"
        }
      ]
    }
  ],
  "slides": [
    {
      "number": 1,
      "title": "CHM 3120: Introduction to Analytical Chemistry",
      "text": "CHM 3120: Introduction to Analytical Chemistry\nUnit 2 - Section 3:\nQuality Assurance & Figures of\nMerit for Analytical Methods\nChapter 6\nS UMM ER 2 0 2 6\nDR . ALI SH AFI EE\nali.shafiee@ufl.edu"
    },
    {
      "number": 2,
      "title": "Quality Assurance and Calibrations",
      "text": "Quality Assurance and Calibrations\nWhat is quality assurance (QA)?\nHow do we compare analytical methods?\nWhat constitutes signal and what constitutes noise?\nHow do we pose a scientific question?\n2\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 3,
      "title": "Basics of Quality Assurance",
      "text": "Basics of Quality Assurance\nFalse positives vs false negatives\nSuppose 0.2% of people have a particular type of cancer and an analytical test\nhas a 99% probability of detecting cancer with a 1% false positive rate.\nAmongst 1M people, 0.2% (2,000) then likely have cancer.\nIf 1M are screen, the test will accurately determine that 99% of those 2,000\n(1,980) have cancer. But 1% (20) will be incorrectly told they are cancer free\n(false negative).\nIn the remaining 998,000 people, a 1% false positive rate identifies cancer in\n9,980 healthy people. So, of the positive results, only 1,980/9,980 (17%) are\ntrue positives. The remaining 83% are false positives.\n3\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 4,
      "title": "Basics of Quality Assurance",
      "text": "Basics of Quality Assurance\nFalse positives vs false negatives\nAcceptable false positive and false negative rates are application dependent\nEx. You are testing that a contaminant in drinking water is below a legal limit:\n• A false positive says that the concentration exceeds the legal limit when in fact the\nconcentration is below the legal limit\n• A false negative says that the concentration is below the limit when it is actually above\nthe limit\nA low rate of false negatives is more important than a low rate of false positives\nIt would be worse to certify that contaminated water is safe than to certify that safe water\nis contaminated\n4\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 5,
      "title": "Quality Assurance is Challenging",
      "text": "Quality Assurance is Challenging\nVitamin C concentration in\na tablet manufacturing line\n95.5%\n~\n99.7%\nC.I.\n5\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 6,
      "title": "Quality Assurance is Challenging",
      "text": "Quality Assurance is Challenging\n95% C.I.\nH. Marchandise, Fresenius Journal Analytical Chemistry, 345, 82-86 (1993) 6\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 7,
      "title": "Definitions and Figures of Merit",
      "text": "Definitions and Figures of Merit\n• Selectivity or Specificity: distinguishing analyte from non-analyte\n• Limit of Detection: a statistical estimate of the lowest detectable amount or conc.\n• Sensitivity: slope of the calibration function\n• Linearity: how close a calibration function is to a linear\n• Method Blank: contains everything but the analyte\n• Field Blank: a method blank which has been exposed to the sample conditions\n• Matrix: everything in the sample but the analyte\n• Spike: a quantity of analyte which is added to the sample\n• Assessment: data collection to verify analytical performance and objectives\n• Method Validation: a formal procedure to prove a method is acceptable\n7\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 8,
      "title": "Standardization and Calibration",
      "text": "Standardization and Calibration\nCalibration determines the relationship between the analytical response and the analyte\nconcentration, which is usually determined by the use of chemical standards.\n• In the direct comparison method (least common), the standard is compared directly\nto the analyte.\n• More commonly, external standard methods are used, where standards are prepared\nseparately from the analyte solution.\n• When matrix effects from other sample components (called concomitants) may\ninterfere, we can minimize them by:\n• Adding standards into the analyte solution (standard addition or internal standard\nmethods), or\n• Modifying or matching the matrix composition of standards and samples.\n8\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 9,
      "title": "Direct Comparison (null comparison)",
      "text": "Direct Comparison (null comparison)\nThis method involves comparing a property of the analyte with that of a standard, adjusting the\nstandard until the measured property matches or nearly matches, producing a null difference.\nIt gives only an approximate concentration, typically useful near a threshold level.\nMost effective when the analyte and standard behave identically. Common in colorimetry, visual\ntitrations, or when using absorbance balancing techniques.\nA Comparison Method for Aflatoxins 9\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 10,
      "title": "External Standard Calibration",
      "text": "External Standard Calibration\nIn the external standard method, we use one or more\nstandards (ideally at least six independently prepared\nsolutions with known analyte concentrations) to build a\ncalibration curve.\nWhen the curve is linear, the slope (m) indicates\nconstant sensitivity across the concentration range.\nHowever, if the curve is nonlinear, the method's\nl\na\nsensitivity varies with concentration, making the results n\ng\ni\nS\nmore challenging to interpret.\nConcentration\n10\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 11,
      "title": "Calibration Curve",
      "text": "Calibration Curve\nConcentration Peak Area\n0.25 25\n0.50 50\n0.75 75\n1.0 100\n11\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 12,
      "title": "Linear Regression",
      "text": "Linear Regression\nDue to indeterminate errors, not all data points fall perfectly on the line. we use regression analysis\nto find the best-fit line through the data and for specifying the uncertainties.\nThe Least-Squares Method\nAssumption #1: There is a linear relationship\nbetween the measured response y and the standard\nanalyte concentration x.\nThe regression model mathematical describe this\nassumption as:\n𝑦 = 𝑚𝑥 + 𝑏\n12\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 13,
      "title": "Linear Regression",
      "text": "Linear Regression\nDue to indeterminate errors, not all data points fall perfectly on the line. we use regression analysis\nto find the best-fit line through the data and for specifying the uncertainties.\nThe Least-Squares Method\nAssumption #2: any deviation of the individual\npoints from the straight line results from error in the\nindividual measurements.\nThat is, assume that there is no error in x values of\nthe points (concentrations).\n𝑦 = 𝑚𝑥 + 𝑏\n13\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 14,
      "title": "Least Squares",
      "text": "Least Squares\nThe goodness of fit of your best fit line is represented by R2. This is called\nthe co-efficient of determination. The closer it is to 1, the better the value.\n800 700 800\n700 y = 9.991x + 1.2049 600 y = 8.4799x + 20.775 700\n600 R² = 1 600\n500 R² = 0.8248\n500 500\n400\nla\nn 400\nla\nn\nla\nn 400\ng g g\niS iS 300 iS\n300 300\n200 y = 1.1512x + 289.88\n200 200\n100 100 100 R² = 0.0122\n0 0 0\n0 20 40 60 80 0 20 40 60 80 0 20 40 60 80\nConcentration Concentration Concentration\nExercises in Excel: Link\n14\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 15,
      "title": "Practice Problem: Calibration Curve",
      "text": "Practice Problem: Calibration Curve\nDetermine the concentration of benzene with a peak area of 184 using a calibration curve. The external\nstandards gave the following responses:\nConcentration (mg/ml) Peak Area\n0.0100 40\n0.0500 75\n0.100 124\n0.150 200\n0.200 240\n0.250 325\n15\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 16,
      "title": "Practice Problem: Calibration Curve",
      "text": "Practice Problem: Calibration Curve\n𝑦 = 1176.5𝑥 + 18.316\nUnknown gives a response of 184\nSo y = 184\n184 = 1176.5𝑥 + 18.316\n𝑚𝑔\n𝑥 = 0.14083\n𝑚𝑙\n𝑚𝑔\n𝑥 = 0.141\n𝑚𝑙\n16\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 17,
      "title": "Figures of Merit for Analytical Methods",
      "text": "Figures of Merit for Analytical Methods\n17\nSource: Link\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 18,
      "title": "Limit of Detection",
      "text": "Limit of Detection\nLimit of detection (LOD): the lowest concentration we can report with a defined level of\nconfidence; meaning it's significantly different from a blank measurement.\nTo establish the LOD with approximately 99%\nconfidence, we define it so that only about 1% of\ntruly blank samples produce a signal above the\ndetection limit. In other words, we set a 1% false\npositive rate.\nHowever, Note that, this detection limit gives us only\n50% confidence in identifying a real signal from a\nsample that actually contains analyte at the LOD. That\nmeans half the samples at the detection limit will fail\nto give a detectable signal, leading to a 50% false\nnegative rate at that concentration.\n18\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 19,
      "title": "Limit of Qualification",
      "text": "Limit of Qualification\nLimit of Qualification (LOQ): the smallest amount that can be measured with reasonable accuracy.\nl\na\nn\ng\ni\nS\n19\nSource: Link\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 20,
      "title": "The Three Main Analytical Regions",
      "text": "The Three Main Analytical Regions\nk=1 k=3 k=10\n20\nCHM3120 | Ali Shafiee | UF Source: Link"
    },
    {
      "number": 21,
      "title": "Limit of Detection",
      "text": "Limit of Detection\nThe limit of detection (LOD): the lowest concentration we can report with a defined level of\nconfidence; meaning it's significantly different from a blank measurement.\n𝑘 𝑠\n𝑏𝑙𝑎𝑛𝑘\n𝐿𝑂𝐷 = ; (k = 3)\n𝑚\n𝑘 𝑠\n𝑏𝑙𝑎𝑛𝑘\n𝐿𝑂𝑄 = ; (k = 10)\n𝑚\n21\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 22,
      "title": "Sensitivity",
      "text": "Sensitivity\nCalibration sensitivity is the slope of the calibration curve and remains constant when the curve\nis linear. However, it doesn't reflect how well we can distinguish between concentrations. For\nthat, we use analytical sensitivity: the slope divided by the standard deviation of the signal at a\ngiven concentration. Unlike calibration sensitivity, analytical sensitivity often depends on\nconcentration.\n400\n350 y = 35.528x + 3.5686\nConcentration Signal 1 Signal 2 R² = 0.9998\n300\n0.1 5 10\n250\n0.5 10 20\nla\nn 200\n1 20 40 g iS\ny = 17.764x + 1.7843\n150\n2.5 45 90 R² = 0.9998\n5 90 180 100\n10 180 360 50\n0\n0 1 2 3 4 5 6 7 8 9 10 11\nConcentration 22\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 23,
      "title": "Dynamic Range vs. Linear Dynamic Range",
      "text": "Dynamic Range vs. Linear Dynamic Range\nDynamic Range\nThe full range of analyte concentrations where the instrument gives a measurable response—not\nnecessarily linear.\nIt extends from the LOD (or LOQ) to the point where the signal plateaus or becomes unreliable (e.g.,\ndue to saturation).\nLinear Range\nThe portion of the dynamic range where the\nresponse is directly proportional to concentration.\nThe lower limit LOD (or LOQ).\nThe upper limit is where the signal or slope\ndeviates from linearity (LOL)—usually by more\nthan 5%.\nDeviations at high concentrations often result\nfrom nonideal detector behavior or chemical\neffects.\n23\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 24,
      "title": "External Standard Addition Method (ExSTA)",
      "text": "External Standard Addition Method (ExSTA)\nHelps correct for matrix effects: ideal when we\nknow what analyte we're targeting, but the\nsample composition is complex, variable, or\nunknown, make it difficult or impossible to\nprepare standards or blanks that match the\nsample matrix: interferences from other\ncomponents that affect the analytical signal or\nslope of the calibration curve.\n24\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 25,
      "title": "ExSTA: Single-Point Method",
      "text": "ExSTA: Single-Point Method\nThe signal of the unknown sample is measured first. A known amount of standard is then\nadded to the same solution and the signal is measured again. Because analytical signal (I) is\nproportional to concentration (C): 𝐼 ∝ 𝐶 (𝑜𝑟 𝐼 = 𝑘𝐶)\nSignal from the original sample: 𝐼 = 𝑘[𝑋]\n𝑋 𝑖\nSignal after adding standard: 𝐼 = 𝑘([𝑆] +[𝑋] )\n𝑆+𝑋 𝑓 𝑓\n[𝑿] 𝑰\n𝒊 𝑿\n=\nTaking the ratio of the two signals:\n[𝑺] +[𝑿] 𝑰\n𝒇 𝒇 𝑺+𝑿\nIn this method we need to account for dilutions for [𝑆] and [𝑋] :\n𝑓 𝑓\n𝑽 𝑽\n𝒔 𝒙\n[𝑺] = [𝑺] [𝑿] = [𝑿]\n𝒇 𝒊 𝒇 𝒊\n𝑽 𝑽\n[𝑋] =initial concentration of sample\n𝐼 =intensity/signal from sample\n𝑖\n𝑋\n[𝑆] =final concentration of standard\n𝐼 =intensity/signal from sample and standard\n𝑓\n𝑆+𝑋\n[𝑋] =final concentration of sample V = total volume after addition 25\n𝑓\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 26,
      "title": "ExSTA: Single-Point Method",
      "text": "ExSTA: Single-Point Method\nThe signal of the unknown sample is measured first. A known amount of standard is then\nadded to the same solution and the signal is measured again. Because analytical signal (A) is\nproportional to concentration (𝐶 ): A ∝ 𝐶 (𝑜𝑟 𝐴 = 𝑘𝐶 )\n𝑢 𝑢 𝑢\nSignal from the original sample: 𝐴 = 𝑘𝐶\n1 𝑢\nSignal after adding standard: 𝐴 = 𝑘(𝐶 𝑉 + 𝐶 𝑉 )/𝑉\n2 𝑢 𝑢 𝑠 𝑠 𝑡\n𝑨 𝑪 𝑽\n𝟏 𝒔 𝒔\n𝑪 =\nSolving for the unknown concentration:\n𝒖\n𝑨 𝑽 − 𝑨 𝑽\n𝟐 𝒕 𝟏 𝒖\nIn this form, the volume correction is already included in the equation, so dilution\ndoes not need to be handled separately.\n𝐶 : concentration of analyte in the unknown\n𝑢 𝑉 : volume of standard added\n𝐶 : concentration of standard 𝑠\n𝑠 𝑉 : volume of unknown\n𝐴 & 𝐴 (𝑜𝑟 𝑆): measured signals 𝑢\n1 2 𝑉 : total volume after addition (𝑉 +𝑉 )\n𝐾 : proportionality constant 𝑡 𝑢 𝑠 26\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 27,
      "title": "Practice Problem",
      "text": "Practice Problem\nSolution believed to contain PCP gives a UV-Vis absorbance reading of 0.35. 20 mL of a standard of\nPCP, with a concentration of 0.5 mg/mL was added to 80 mL of sample. A new reading was taken\nand gave a reading of 0.92. What was the initial concentration of PCP?\nI ​=0.35 (initial absorbance)\nStep 1: Final concentrations:\nX\nI =0.92 (absorbance after spike)\nS+X\n𝑉 20\nV =80 mL (sample volume) 𝑠\n[𝑆] = 𝑆 = 0.5 × = 0.10 𝑚𝑔/𝑚𝐿\nX\n𝑓 𝑖\n𝑉 100\nV =20 mL (standard added)\nS\nV=V +V =100 mL (final total volume)\nX S [𝑋] = 𝑋 𝑉 𝑥 = 𝑋 × 80 = 0.80 [𝑋]\n[S] =0.5 mg/mL 𝑓 𝑖 𝑖 𝑖\n𝑉 100\ni\nStep 2: Plug into conceptual equation:\n[𝑋] 𝐼 [𝑋] 0.35\n𝑖 𝑋 𝑖\n= → =\n[𝑆] +[𝑋] 𝐼 0.10 + 0.80 𝑋 0.92\n𝑓 𝑓 𝑆+𝑋 𝑖\n0.64 𝑋 = 0.035 →\n𝑖\n𝑋 ≈ 0.055 𝑚𝑔/𝑚𝐿\n𝑖\n27\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 28,
      "title": "Practice Problem",
      "text": "Practice Problem\nSolution believed to contain PCP gives a UV-Vis absorbance reading of 0.35. 20 mL of a standard of\nPCP, with a concentration of 0.5 mg/mL was added to 80 mL of sample. A new reading was taken\nand gave a reading of 0.92. What was the initial concentration of PCP?\nA = 0.35 (initial absorbance)\n1\nA = 0.92 (absorbance after spike)\n2\nV =80 mL (sample volume)\nu\nV =20 mL (standard added)\nS\nV =V +V =100 mL (final total volume)\nt X S\nC =0.5 mg/mL A C V 0.35 0.5 (20.0)\ns 1 s s\nC = =\nu\nA V − A V 0.92 × 100 − 0.35 × 80\n2 t 1 u\n3.5\n= ≈ 0.055 mg/mL\n64\n28\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 29,
      "title": "Practice Problem",
      "text": "Practice Problem\nA sample solution of unknown Ni2+ gives an UV-Vis absorbance of A = 0.246.\n1\nAfter adding 2.00 mL of 20.0 ppm Ni2+ standard to 10.00 mL of the sample and diluting to V = 12.00 mL, the\nt\nsignal rises to A = 0.412.\n2\nFind the unknown Ni2+ concentration in the original sample.\n𝐴 𝐶 𝑉 0.246 × 20.0 × 2.00 9.84\n1 𝑠 𝑠\n𝐶 = → 𝐶 = = ≈ 3.96 𝑝𝑝𝑚 𝑁𝑖2+\n𝑢 𝑢\n𝐴 𝑉 − 𝐴 𝑉 0.412 × 12.00 − 0.246 × 10.00 2.484\n2 𝑡 1 𝑢\n29\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 30,
      "title": "ExSTA: Multiple-Point Method",
      "text": "ExSTA: Multiple-Point Method\nInstead of adding standard once, several additions of standard are made and the signal is\nmeasured after each addition.\nAdvantages:\n• improves precision and accuracy\n• allows graphical determination of the unknown concentration\n• provides a check for linearity of the analytical response\nTwo common experimental implementations:\n1. Successive additions to a single solution\n2. Multiple solutions with constant final volume\n30\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 31,
      "title": "ExSTA: Multiple-Point Method",
      "text": "ExSTA: Multiple-Point Method\nMultiple Solutions Successive Additions\nFeature\n(Constant Final Volume) to One Solution\nSeparate flasks prepared with Standard added repeatedly to\nSetup\ndifferent standard additions the same sample solution\nOne solution measured\nNumber of solutions Several independent solutions\nrepeatedly\nTotal volume Constant final volume Changes after each addition\nDilution effect Already controlled Must be corrected for\nGraphical method accounting for\nData analysis Linear regression calibration curve\ndilution\nMost common implementation in Instrument methods where\nTypical use\nanalytical chemistry repeated measurement is easy\n31\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 32,
      "title": "Multiple Solutions with Constant Final Volume",
      "text": "Multiple Solutions with Constant Final Volume\nIn this method, several separate solutions are prepared, each containing the\nsame volume of sample and increasing amounts of standard. Each solution is\nthen diluted to the same final volume before measuring the signal.\nProcedure:\n1. Pipette the same volume of unknown sample into several volumetric flasks.\n2. Add different volumes of standard solution to each flask.\n3. Dilute each flask to the same final volume with solvent and mix.\n4. Measure the signal for each solution.\nBecause every solution is diluted to the same final volume,\nthe dilution factor is constant and the analytical signal\nvaries linearly with the amount of added standard.\n32\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 33,
      "title": "Multiple Solutions with Constant Final Volume",
      "text": "Multiple Solutions with Constant Final Volume\n𝒌𝑪 𝒌𝑪 𝑽\n𝑽 𝑽 Rearranging the signal 𝒔 𝒖 𝒖\n𝒖 𝒔 𝑺 = 𝑽 +\n𝑺 = 𝒌 𝑪 + 𝑪 equation gives a linear form 𝒔\n𝑽 𝑽\n𝒖 𝒔\n𝑽 𝑽 𝒇 𝒇\n𝒇 𝒇\nwhich matches → 𝒚 = 𝒎𝒙 + 𝒃\nFrom the slope and intercept of the calibration line\n𝒃𝑪\n𝒔\n𝑪 =\n𝒙\n𝒎𝑽\n𝒖\nThe x-intercept of the calibration curve corresponds to\n𝑪 𝑽\n𝒖 𝒖\n𝑿 = −\n𝒊𝒏𝒕\n𝑪\n𝒔\nV : the same volume of unknown sample\nu\nV : the same final volume in each flask\nf\nV : increasing volumes of standard 33\nCHM3120 | Ali Shafiee | UF s"
    },
    {
      "number": 34,
      "title": "Practice Problem",
      "text": "Practice Problem\nVolume of standard added\nAbsorbance\n(mL)\nA student analyzes an environmental water sample containing Cu2+ 0.00 0.215\nusing UV–Vis spectroscopy at 620 nm. To correct for matrix effects each 2.00 0.339\n25.00 mL aliquot of the sample is transferred to a 50.00 mL volumetric\n4.00 0.461\nflask, and standard Cu2+ solution (10.0 ppm) is added in increasing\n6.00 0.583\namounts before dilution to the mark. Find the unknown concentration\n8.00 0.709\nof Cu2+ in the sample (C ).\nu\n0.8\nMethod 1: Using the slope and intercept\n0.7\ny = 0.0616x + 0.215\n0.6\nR2 = 1\nbC (0.215) × (10.0 ppm) 0.5\ns\n2+\nC = = ≈ 1.40 𝑝𝑝𝑚 𝐶𝑢\nx 0.4\nmV 0.0616 𝑚𝐿−1 × (25.00 mL)\nu\n0.3\n0.2\n0.1\n0\n-5 -4.5 -4 -3.5 -3 -2.5 -2 -1.5 -1 -0.5 0 0.5 1 1.5 2 2.5 3 3.5 4 4.5 5 5.5 6 6.5 7 7.5 8 8.5 9\n-0.1\n34\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 35,
      "title": "Practice Problem",
      "text": "Practice Problem\n0.8\n0.7\ny = 0.0616x + 0.215\nMethod 2: Using the x-intercept (𝑋 ):\n𝑖𝑛𝑡 0.6 R2 = 1\n(The x-intercept can be calculated using Excel or\n0.5\ndetermined from the equation of the line.):\n0.4\nA = 0.0616V + 0.215\n0.3\ns\n→ 𝑠𝑒𝑡 𝐴 = 0 →\n0.2\n0.1\n0.215\n𝑉 = − = −3.49 𝑚𝐿 = 𝑋\n𝑠 𝑖𝑛𝑡 0\n0.0616\n-5 -4.5 -4 -3.5 -3 -2.5 -2 -1.5 -1 -0.5 0 0.5 1 1.5 2 2.5 3 3.5 4 4.5 5 5.5 6 6.5 7 7.5 8 8.5 9\n-0.1\n𝐶 𝑉 𝑋 𝐶\n𝑢 𝑢 𝑖𝑛𝑡 𝑠\n𝑋 = − → 𝑠𝑜𝑙𝑣𝑒 𝑓𝑜𝑟 𝐶 → 𝐶 = −\n𝑖𝑛𝑡 𝑢 𝑢\n𝐶 𝑉\n𝑠 𝑢\n−3.49 𝑚𝐿 10.0 𝑝𝑝𝑚\n𝐶 = − = 1.40 𝑝𝑝𝑚\n𝑢\n(25.0 𝑚𝐿)\n35\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 36,
      "title": "Successive Additions to One Solution",
      "text": "Successive Additions to One Solution\nIn this method, the standard solution is added\nsuccessively to the same sample solution.\nProcedure:\n1. Measure the signal of the original sample.\n2. Add a small volume of standard.\n3. Measure the signal again.\n4. Repeat several additions.\nLink 36\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 37,
      "title": "Successive Additions to One Solution",
      "text": "Successive Additions to One Solution\n𝑪 𝑽 + 𝑪 𝑽\n𝒖 𝒖 𝒔 𝒔\nFor the original unspiked sample: when 𝑽 = 𝟎 → 𝑺 = 𝒌𝑪\n𝑺 = 𝒌\n𝒔 𝟎 𝒖\n𝑽 + 𝑽\n𝒖 𝒔\nBy extrapolating the calibration line to the x-axis, we\ndetermine the negative of the analyte concentration in\nthe original sample.\nS\nMeaning of the x-intercept: The x-intercept (𝑋 )\n𝑖𝑛𝑡\nrepresents the amount of added standard required to\nreduce the signal to zero.\nIf x-axis = added standard concentration: 𝑪 = −𝑿\n𝒖 𝒊𝒏𝒕\nIf x-axis = added standard volume:\n𝑿\n𝒊𝒏𝒕\n−𝑿 𝑪\n𝒊𝒏𝒕 𝒔\n𝑪 =\n𝒖\n𝑽\n𝒖\n37\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 38,
      "title": "Practice Problem Volume of standard",
      "text": "Practice Problem Volume of standard\nAbsorbance\nadded (mL)\n0.00 0.220\nA researcher is tasked with determining the concentration of oxybenzone in a\n1.00 0.287\nsunscreen sample using UV–Vis spectroscopy. Because the sunscreen matrix\ncontains oils, emulsifiers, and other UV-absorbing compounds, a significant 2.00 0.352\nmatrix effect is suspected. 3.00 0.419\nTo account for this, increments of a 10.0 ppm oxybenzone standard solution are\n4.00 0.486\nadded directly to 25.00 mL of the unknown sample and the absorbance is\nmeasured after each addition. The following data were obtained. Calculate the\nconcentration of oxybenzone in the original sample.\n0.45\n0.4\n0.35 y = 0.0676x + 0.1274\nR² = 0.9918\n0.3\n0.25\n0.2\n0.15\n0.1\n0.05\n0\n-2.5 -2 -1.5 -1 -0.5 0 0.5 1 1.5 2 2.5 3 3.5 4 4.5\n38\n-0.05\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 39,
      "title": "Practice Problem",
      "text": "Practice Problem\n0.45\nThe x-intercept can be calculated using Excel or\n0.4\ndetermined from the equation of the line:\n0.35 y = 0.0676x + 0.1274\nR² = 0.9918\n0.3\n0.25\nA = 0.0676V + 0.1274\ns\n→ 𝑠𝑒𝑡 𝐴 = 0 → 0.2\n0.15\n0.1274 0.1\n𝑉 = − = −1.8846 𝑚𝐿 = 𝑋\n𝑠 𝑖𝑛𝑡 0.05\n0.0676\n0\n-2.5 -2 -1.5 -1 -0.5 0 0.5 1 1.5 2 2.5 3 3.5 4 4.5\n-0.05\n−X C − −1.8846 𝑚𝐿 (10 𝑝𝑝𝑚)\nint s\nC = = = 0.754 𝑝𝑝𝑚\nu\nV (25 𝑚𝐿)\nu\n39\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 40,
      "title": "Standard Addition Disadvantages",
      "text": "Standard Addition Disadvantages\nMath is a bit more complicated\nDoes not account for random errors\nVariations in instrument response from run-to-run\nVariations in quantity of sample analyzed from run-to-run\n(e.g., GC- MS)\n40\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 41,
      "title": "Internal Standard",
      "text": "Internal Standard\nProvides an independent signal which can\nbe used for normalization\nKnown concentration of Internal standard\nadded to each sample and calibration sample\nRatio of standard response to analyte helps to\novercome discrepancies between injections\n(random error)\nCurve of ratios of peak area (sample:IS) plotted\nvs [Sample]:[IS]\n41\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 42,
      "title": "Internal Standard",
      "text": "Internal Standard\nProvides an independent signal which can\nS\nbe used for normalization i\ng\nn\na\nl\nr\na\nt\nKnown concentration of Internal standard i\no\n(\nS\nadded to each sample and calibration sample\na\nm\np\nl\ne\n:\nI\nRatio of standard response to analyte helps S\n)\nto overcome discrepancies between\ninjections (random error)\nConcentration ratio ([Sample]:[IS])\nCurve of ratios of peak area (sample:IS)\nplotted vs [Sample]:[IS]\n42\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 43,
      "title": "Internal Standard",
      "text": "Internal Standard\nBenzene (0.1 mg/ml) Toluene (0.1 mg/ml) Ratio (PA /PA )\nB T\n105 105 1\n115 115 1\n97.0 97.0 1\nDifferences in repeat benzene measurements\nare seen in the internal standard toluene\n43\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 44,
      "title": "Internal Standard",
      "text": "Internal Standard\nA = signal from analyte\n𝐴 𝐴 X\n𝑋 𝑆 [X] =concentration of analyte\nf\n= 𝐹\nA = signal from standard\nS\n[𝑋] [𝑆]\n[S] =concentration of standard\n𝑓 𝑓\nf\nF= response factor\nUse a standard and internal standard of known concentration to calculate the\nresponse factor, F.\nUse F to calculate the concentration of your sample with the internal\nstandard at the same concentration.\n44\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 45,
      "title": "Practice Problem",
      "text": "Practice Problem\nIn a preliminary experiment, a solution containing 0.0837 M X and 0.0666 M S, gave peak areas of\nA =432 and A =347 (Areas are measured in arbitrary units by the instrument.) To analyze the\nx s\nunknown, 10.0 mL of 0.146 M S were added to 10.0 mL of unknown, and the mixture was diluted to\n25.0 mL in a volumetric flask. This mixture gave the below chromatogram, for which A =553 and\nx\nA =582. Find the concentration of X in the unknown.\ns\n𝐴 𝐴 432 347\n𝑋 𝑆\n= 𝐹 = = 𝐹 → 𝐹 = 0.9906\n[𝑋] [𝑆] 0.0837 𝑀 0.0666 𝑀\n𝑓 𝑓\n10 𝑚𝐿\nDilution factor: [𝑆] = 0.146 𝑀 = 0.0584 𝑀\n𝑓\n25 𝑚𝐿\n553 582\n= 0.9906 → [𝑋] = 0.05602 𝑀\n𝑓\n[𝑋] 0.0584 𝑀\n𝑓\nBecause X was diluted from 10.0 to 25.0 mL when the mixture with S was\nprepared, the original concentration of X in the unknown:\n25 𝑚𝐿\n[𝑋] = 0.05602 𝑀 = 0.140 𝑀\n10 𝑚𝐿 45\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 46,
      "title": "Internal Standard",
      "text": "Internal Standard\nInternal standards are especially useful for analyses in which the quantity of sample analyzed\nor the instrument response varies slightly from run to run.\nWhat would be some good characteristics of an internal standard?\nWell-resolved from analyte\nStable\nPure\nHigh response from detector\nNever found in sample\nStructurally similar to analyte\n46\nCHM3120 | Ali Shafiee | UF"
    },
    {
      "number": 47,
      "title": "47",
      "text": "47\nCHM3120 | Ali Shafiee | UF"
    }
  ],
  "practice": [
    {
      "number": 1,
      "topic": "Lecture practice",
      "difficulty": "Advanced",
      "prompt": "The second is defined using 9,192,631,770 cycles of radiation from the transition between two\nground-state levels of cesium-133. If a measurement spans 5.0 x 1012 cycles, calculate the elapsed\ntime in seconds.",
      "key": "The elapsed time is 540 seconds (5.4 x 102 s).",
      "hint": "Identify the measured quantities first, then apply the significant-figure rule for the operation being performed."
    },
    {
      "number": 2,
      "topic": "Lecture practice",
      "difficulty": "Advanced",
      "prompt": "The mole now contains exactly 6.02214076 x 1023 entities. Previously, the mole was tied to 0.012\nkg of carbon-12. Calculate the mass, in grams, of one carbon-12 atom using the exact Avogadro\nconstant.",
      "key": "1.99 x 10-23 g",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 3,
      "topic": "Lecture practice",
      "difficulty": "Intermediate",
      "prompt": "The meter is defined using the speed of light in vacuum, c = 299,792,458 m/s. Calculate the distance\nlight travels in exactly 1.0 fs.",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 4,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "Using decimal SI prefixes, determine the factor difference between 1 yottabyte (yb) and 1 petabyte\n(pb). You may also use the relationship that 1 zettabyte is 1 billion terabytes.",
      "key": "The f actor d ifference b etween 1 y ottabyte a nd 1 p etabyte i s 1 09, w hich i s 1 ,000,000,000 ( 1 b illion)",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 5,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "A sample contains 500 zeptomoles of a protein in a total volume of 1.0 µL. Calculate the molarity\nand report the concentration in attomolar (aM).",
      "key": "The molarity of the solution is 5.0 x 10-13 M, and the concentration expressed in attomolar is 5.0 x\n105 aM (or 500,000 aM)",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 6,
      "topic": "Lecture practice",
      "difficulty": "Advanced",
      "prompt": "An experiment releases 500 thermochemical calories of energy. Convert this energy to electron\nvolts (eV). Use 1 cal = 4.184 J and 1 eV = 1.602176487 x 10-19 J.",
      "key": "1.306 x 1022 eV",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 7,
      "topic": "Lecture practice",
      "difficulty": "Intermediate",
      "prompt": "The mass of Earth is approximately 6,000 Yg. Convert this mass to metric tons (t), where 1 t = 1000\nkg.",
      "key": "The mass of Earth is 6 x 1021 metric tons",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 8,
      "topic": "Lecture practice",
      "difficulty": "Intermediate",
      "prompt": "A 5.00 g sample of Mg(OH) is dissolved and diluted to a final volume of 100.0 ml. The molar mass\n2\nof Mg(OH) is 58.3197 g/mol. Calculate the molarity of the solution.\n2",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 9,
      "topic": "Lecture practice",
      "difficulty": "Advanced",
      "prompt": "A 5.00 g sample of Mg(OH) is dissolved in 99.777 g of water.\n2\na. The molar mass of Mg(OH) is 58.3197 g/mol. Calculate the molality of the solution.\n2\nb. Calculate the mass percent of Mg(OH) in the solution.\n2\nc. Using this value, calculate the mole fraction of Mg(OH) . Use molar mass Mg(OH) = 58.3197\n2 2\nand molar mass H O = 18.015 g/mol.\n2\nd. Convert the mole fraction of Mg(OH) to mole percent.\n2",
      "key": "a. Molality: 0.859 m, b. Mass Percent: 4.77%, c. Mole Fraction: 0.0152, d. Mole Percent: 1.52%",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 10,
      "topic": "Lecture practice",
      "difficulty": "Advanced",
      "prompt": "A gold bullion sample has a mass of 12.4 kg. Use 1 kg = 1000 g, 1 Yg = 1024 g, 1 yg = 10-24 g, and the\nmolar mass of Au = 196.97 g/mol.\na. Convert the mass to yottagrams (Yg).\nb. Convert the mass to yoctograms (yg).\nc. Assuming the sample is pure gold, calculate the number of moles of Au present.\nd. If the entire sample is dissolved and diluted to 4.00 L total volume, calculate the molar\nconcentration of Au in the final solution.",
      "key": "a. 1.24 x 10-20 Yg\nb. 1.24 x 1028 yg\nc. 62.9 mol, d. 15.7 M",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 11,
      "topic": "Lecture practice",
      "difficulty": "Advanced",
      "prompt": "A 355 ml can of Coca-Cola Zero Sugar contains approximately 185 mg of aspartame, C H N O ,\n14 18 2 5\nwith a molar mass of 294.3 g/mol. The acceptable daily intake (ADI) for aspartame is 50.0 mg of\naspartame per kg body mass. Assume the beverage is a dilute aqueous solution with a density of\n1.00 g/ml. Use 18.015 g/mol for the molar mass of water.\nFor a 70.0 kg individual:\na. Calculate the maximum mass of aspartame, in both mg and g, that this individual could\nconsume in one day before exceeding the ADI.\nb. For one 355 ml can, calculate the concentration of aspartame in each of the following units:\nmolarity, ppm, mass percent, and mole fraction of aspartame.\nc. Based on the ADI, calculate how many whole cans of Coca-Cola Zero Sugar this individual\nwould need to consume in one day to exceed the ADI.",
      "key": "a. Maximum mass of aspartame: 3.50 x 103 (or 3500. mg, 3.50g),\nb. Concentration in one can: Molarity: 1.77 x 10-3 M, ppm: 521 ppm, Mass Percent: 0.0521%, Mole\nFraction: 3.19 x 10-5 ,\nc. Cans to exceed ADI: 19 whole cans",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 12,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "A fatal dose threshold for botulinum toxin is 1 ng/kg body mass. For a 70.0 kg human, calculate the\ntotal dose in ng and express the threshold as parts per billion (ppb) by mass relative to body mass.",
      "key": "70 ng, 0.001 ppb",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 13,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "A 100.0 g solution contains 50 ppm of a solute by mass. Calculate the mass of solute in milligrams.",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 14,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "Explain why 1 mg/L is approximately equal to 1 ppm for dilute aqueous solutions. Identify the\nphysical property of water that makes this approximation work.",
      "key": "Water density is 1 g/ml, which is for dilute solutions 1 L ≈ 1 Kg; 1 mg/Kg = 1 ppm",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 15,
      "topic": "Lecture practice",
      "difficulty": "Advanced",
      "prompt": "A trace sample contains 120,000 peptide molecules. Use Avogadro’s number to calculate the total\namount in moles and then express the result in zeptomoles (zmol). Compare your result with 200\nzmol.\n2\n. A 1.25 M NaOH solution has a density of 1.01 g/ml. Determine whether the molality is higher or\nlower than the molarity and explain why. Use molar mass NaOH = 39.997 g/mol if you choose to\nsupport your answer with a calculation.",
      "key": "1.993 x 10-19 mol, 199.3 zmol, just under 200 zmol",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 17,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "You have a 20 mM caffeine stock solution and need to prepare 100 ml of a 100 µM caffeine solution.\nCalculate the volume of stock solution required in µL.",
      "key": "500 μL of stock solution",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 18,
      "topic": "Lecture practice",
      "difficulty": "Intermediate",
      "prompt": "A 1.0 ml portion of a 1.0 M stock solution is diluted to 100 ml to make Solution A. Then, 1.0 mL of\nSolution A is diluted to 1.0 L to make Solution B. Calculate the final concentration of Solution B in\nµM.",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 19,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "Define the acronyms TC and TD for volumetric glassware. Give one example of glassware commonly\nassociated with each designation.",
      "key": "TC • “to contain” • glassware calibrated to contain an exact volume\nIe: volumetric flask\nTD • “to deliver” • glassware calibrated to deliver an exact volume\nIe: pipette",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 20,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "A student uses a flask calibrated “TC” as if it were calibrated “TD” and attempts to deliver 500 ml\nfrom it. Would the delivered volume be too high, too low, or approximately, correct? How would\nthis affect the concentration of a solution prepared from the delivered liquid?",
      "key": "Some liquid would be left o n t he glassware w alls, volume too low, thus the concentration w ould be\ntoo low",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 21,
      "topic": "Lecture practice",
      "difficulty": "Intermediate",
      "prompt": "A 10-100 µL adjustable micropipette is used to dispense 10 µL, which is 10% of its maximum\nvolume. If the manufacturer reports an accuracy of ± 1.8% at this setting, calculate the absolute\nuncertainty in µL and briefly explain why using a micropipette near the low end of its range can be\nless reliable.",
      "key": "0 .18 µL, Micropipettes are less accurate at small volumes because relative uncertainty increases as\nthe total volume decreases.",
      "hint": "For addition/subtraction combine absolute uncertainty; for multiplication/division combine relative uncertainty."
    },
    {
      "number": 22,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "A 2000 ml volumetric flask has a tolerance of ± 0.50 ml. Calculate the relative uncertainty as a\npercentage.",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "For addition/subtraction combine absolute uncertainty; for multiplication/division combine relative uncertainty."
    },
    {
      "number": 23,
      "topic": "Lecture practice",
      "difficulty": "Intermediate",
      "prompt": "A 0.300 g sample of glucose (molar mass = 180.156 g/mol) is dissolved in 95.3 g of water to make\n100.0 ml of solution. Calculate both the molarity and the molality of glucose. Use this data to\ncalculate the mole fraction of glucose in the solution.",
      "key": "Molarity = 1.66x10-3 , Molality = 0.0175m, Mole fraction = 3.14x10-4",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 24,
      "topic": "Calibration",
      "difficulty": "Foundational",
      "prompt": "An analyst discovers that their pipette used for standard additions consistently delivers 10.15 ml\ninstead of 10.00 ml. Classify this error and explain how it would affect the accuracy of the x-intercept\nin a multiple-point standard addition plot.",
      "key": "S ystematic Error, since more standards get added, the calculated added conc. are underestimated,\nand the plotted x-values are too small relative to the actual amounts added.\n2\n. systematic (determinate) error, accuracy.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 25,
      "topic": "Calibration",
      "difficulty": "Intermediate",
      "prompt": "An analyst measures Fe in an environmental water sample by UV-visible spectrophotometry. Before\nanalyzing the unknown, the analyst prepares Fe standards and uses them to build a calibration\ncurve. However, the water used to prepare the Fe standards contains a contaminant that slightly\nchanges the absorbance. The contaminant is not present in the environmental sample.\n3\na. What type of error would this cause?\nb. Would this mainly affect accuracy, precision, or both? Explain briefly.",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Build the line y = mx + b, then use the slope and intercept to convert signal back to concentration."
    },
    {
      "number": 26,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "A lab instructor counts 24 students in the room. Is 24 an exact number or a measured number? Does\nit limit the number of significant figures in a calculation?",
      "key": "Exact Number, it does not limit significant figures",
      "hint": "Identify the measured quantities first, then apply the significant-figure rule for the operation being performed."
    },
    {
      "number": 27,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "A sample mass is recorded as 12.00 g on the balance. Is 12.00 g exact or measured? How many\nsignificant figures does it have?",
      "key": "The value of 12.00 g is a measured quantity, four sig figs.",
      "hint": "Identify the measured quantities first, then apply the significant-figure rule for the operation being performed."
    },
    {
      "number": 28,
      "topic": "Lecture practice",
      "difficulty": "Foundational",
      "prompt": "A procedure says to add 400 ml of water, with no decimal point or uncertainty written. How many\nsignificant figures should be assumed normally?",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the measured quantities first, then apply the significant-figure rule for the operation being performed."
    },
    {
      "number": 29,
      "topic": "Lecture practice",
      "difficulty": "Advanced",
      "prompt": "Identify the number of significant figures in each measurement.\na. 26.84 cm _______\nb. 700 mm ________\nc. 506030 kg _______\nd. 27000.0 dL ______\ne. 7.3841 g _______\nf. 0.064 km _______\ng. 0.00582 dL ______\nh. 3.0000 L ________\ni. 8040.07 m ________\nj. 90.00 km ________\nk. 509.2 L ________\nl. 2460 cg ________\nm. 83.7 mg ________",
      "key": "a. 26.84 cm: 4 significant figures. Any non-zero digit is significant.\nb. 700 mm: 1 significant figure (ambiguous). Trailing zeros without a decimal point may only\nindicate the location of the decimal point and are considered ambiguous.\nc. 506030: 5 since 0 at the end are not considered significant.\nd. 27000.0 dL: 6 significant figures. Zeros at the end of a number are significant if a decimal point\nis explicitly shown, and trailing zeros after a decimal point are always significant.\ne. 7.3841: 5 s ignificant Figures\nf. 0.064 km: 2 significant figures. Zeros at the start of a number are not significant, even if a decimal\npoint is present; they are placeholders used only to locate the decimal point.\ng. 0.00582 dL: 3 significant figures. Leading zeros are placeholders and are not significant.\nh. 3.0000 L: 5 significant figures. Trailing zeros are significant if they appear after a decimal point.\ni. 8040.07 m: 6 significant figures. Zeros in the middle of a number are always significant.\nj. 90.00 km: 4 significant figures. Trailing zeros appearing after a decimal point are significant.\nk. 509.2 L : 4 significant figures. The zero between the nonzero digits is significant.\nl. 2460 cg : 3 significant figures. Trailing zero without a decimal point is not significant\nm. 83.7 mg → 3 significant figures. All nonzero digits are significant.",
      "hint": "Identify the measured quantities first, then apply the significant-figure rule for the operation being performed."
    },
    {
      "number": 30,
      "topic": "Lecture practice",
      "difficulty": "Advanced",
      "prompt": "Round the numbers as requested.\na. Round 86.3472 to 4 significant figures. ________\nb. Round 0.0045689 to 3 significant figures. ________\nc. Round 129.96 to 4 significant figures. ________\nd. Round 5.0796 to the nearest hundredth. ________\ne. Round 24.8634 to 3 significant figures. ________",
      "key": "a. Round 86.3472 to 4 significant figures: 86.35\nReasoning: The fourth significant figure is \"4.\" The first non-significant digit is \"7.\" Since 7 is\ngreater than 5, the last significant digit is increased by 1.\nb. Round 0.0045689 to 3 significant figures: 0.00457\nReasoning: Zeros at the start of a number are placeholders and are not significant. The third\nsignificant figure is \"6.\" The next digit is \"8,\" which is greater than 5, so the 6 is rounded up to 7.\nc. Round 129.96 to 4 significant figures: 130.0\nReasoning: T he f ourth s ignificant f igure i s t he \" 9\" i n t he t enth place. T he f irst n on-significant digit\nis \" 6.\" S ince 6 i s g reater t han 5 , 9 i s i ncreased b y 1 , r esulting i n 1 30.0. T he t railing z ero i s i ncluded\nbecause zeros at the end of a number are significant if a decimal point is explicitly shown\nd. 5.08: To round to the nearest hundredth, keep two digits after the decimal. The thousandth digit\nis 9, which is greater than 5, so the hundredth digit (7) is rounded up to 8.\ne. 24.9: o round to 3 significant figures, keep the first three significant digits (2, 4, and 8). The next\ndigit is 6, which is greater than 5, so the 8 is rounded up to 9",
      "hint": "Identify the measured quantities first, then apply the significant-figure rule for the operation being performed."
    },
    {
      "number": 31,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "Propagate the uncertainty for each expression below. For multiplication/division, use relative\nuncertainty. For addition/subtraction, combine absolute uncertainties. For log terms, assume log\nmeans log10. When mixed operations are present, propagate uncertainty step by step.\na. (105.6 ± 0.7) + (77.8 ± 0.9)\n4\nb. (2.46 ± 0.05) + (3.80 ± 0.02)\nc. (4.0 ± 5%) x (12.4 ± 0.7%)\nd. (4.5 ± 2.3) / (7.50 ± 0.09)\ne. log10[4.60 ± 0.07) x 103]\nf. (10.7 ± 0.6) + (7.8 ± 0.3) - (5.8 ± 0.1)\ng. (38.6 ± 0.9) - [(4.5 ± 0.4) x (5.4 ± 0.2)]\nh. [(53 ± 4) / (3.2 ± 0.3)] + {log10(106 ± 7) x (37 ± 2)}",
      "key": "a. 183.4 ± 1.1\nb. 6.26 ± 0.05\n3\nc. 49.6 ± 2.5\nd. 0.6 ± 0.3\ne. 3.663 ± 0.007\nf. 12.7 ± 0.7\ng. 14 ± 3\nh. 91 ± 5",
      "hint": "For addition/subtraction combine absolute uncertainty; for multiplication/division combine relative uncertainty."
    },
    {
      "number": 32,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "A student prepares a potassium oxalate stock solution by transferring 1.0014 g of K C O into a\n2 2 4\n1.000 L volumetric flask and diluting it to the mark. Assume the molar mass of K C O is 166.22\n2 2 4\ng/mol and treat it as exact. Estimate the balance uncertainty as ± 0.0001 g and the flask uncertainty\nas ± 0.001 L. Calculate the molarity of the solution and report it with an approximate 95%\nconfidence limit using propagation of uncertainty. Use the multiplication/division propagation\nequation and approximate the 95% confidence limit as ± 2s.",
      "key": "Molarity = 0.006024 ± 0.000012 M\nConfidence Limit = ±0.000012M",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 33,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "A food-safety lab analyzed ten portions of salmon tissue for mercury. Use a calculator, Excel, or\nanother spreadsheet program to calculate the mean and the sample standard deviation. Report your\nanswer as mean ± sample standard deviation.\nTrial 1 2 3 4 5 6 7 8 9 10\nppb Hg 5.4 2.9 5.1 4.2 5.6 4.7 7.9 4.8 7.6 2.3",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 34,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "A laboratory collected ten replicate measurements for lead in a tap-water sample. Use Excel or a\nsimilar spreadsheet program to calculate the mean and sample standard deviation. Then verify the\nresult using the statistics functions on your calculator.\nReplicate 1 2 3 4 5 6 7 8 9 10\nPb (ppm) 2.002 1.996 2.000 1.995 1.999 1.987 2.010 2.014 2.007 2.004",
      "key": "2.0014 ±0.007863",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 35,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "A small paint sample from an old building was analyzed ten times for lead. Use Excel or a similar\nspreadsheet program to calculate the mean and sample standard deviation. Then repeat the\ncalculation using your calculator's statistics functions.\nReplicate 1 2 3 4 5 6 7 8 9 10\nPb (ppm) 1001.9 989.0 1020.4 996.1 1002.4 990.0 1019.4 991.3 999.2 1002.4\n5\n. For the data set below, calculate the mean, sample standard deviation, and relative standard\ndeviation.\nTrial 1 2 3 4 5\nMeasured value 0.545 0.522 0.561 0.539 0.577",
      "key": "Mean: 1001.2 ppm, SD: 11.083 ppm",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 37,
      "topic": "Statistics",
      "difficulty": "Intermediate",
      "prompt": "Assume a population follows a normal distribution with mean mu = 60.0 and standard deviation\nsigma = 5.0.\na. If a value has z = 1.2, is it above or below the mean? How many standard deviations is it\nfrom the mean?\nb. If a value has z = -1.2, calculate the raw data value, x.",
      "key": "a. Position: Above the mean; 1.2 standard deviations from t he mean,\nb. Raw data value (x): 54.0",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 38,
      "topic": "Statistics",
      "difficulty": "Foundational",
      "prompt": "A pharmaceutical company produces tablets with a target of aspirin mean 500 mg, s=5 mg. If the\nproduction follows a Gaussian distribution, what percentage of tablets will contain less than 490\nmg of aspirin?",
      "key": "z= -2, from G aussian table 0.5000 – 0.4773= 0.0227 = 2.27%",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 39,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "Use the salmon-tissue mercury data below to calculate the 90% and 99% confidence limits for the\nmean. Report the mean with each confidence limit. Use the sample standard deviation and the\nappropriate t-value for N - 1 degrees of freedom.\nTrial 1 2 3 4 5 6 7 8 9 10\nppb Hg 5.4 2.9 5.1 4.2 5.6 4.7 7.9 4.8 7.6 2.3",
      "key": "5.05 ± 1.024 5.05 ± 1.82",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 40,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "A set of replicate measurements was collected for the same sample. Calculate the mean, sample\nstandard deviation, and 95% confidence limit for the mean.\nReplicate 1 2 3 4 5 6 7\nMeasured\n3.06 3.12 3.09 2.98 3.04 3.11 3.01\nvalue",
      "key": "Mean = 3.06 , SD: 0.052, 3.06 ± 0.048",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 41,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "A pharmaceutical company claims that a tablet contains 2000 mg of the active ingredient. A quality-\ncontrol analyst measures six tablets and obtains the following results. Use the sample standard\ndeviation and t-based confidence intervals. For N = 6, use t = 2.015 for a 90% confidence interval\nand t = 2.571 for a 95% confidence interval.\nTablet 1 2 3 4 5 6\nMeasured\n1985 2010 1995 2020 1990 2005\namount (mg)\n6\na. Calculate the mean and sample standard deviation.\nb. Determine the 90% and 95% confidence intervals for the mean.\nc. Based on the 95% confidence interval, is the 2000 mg label claim consistent with the data?\nExplain briefly.",
      "key": "a. Mean: 2000.8 mg; Sample Standard Deviation: 13.2 mg\nb. 90% CI: 2000.8 ± 10.9 mg; 95% CI: 2000.8 ± 13.9 mg\nc. Yes, consistent; the claim (2000 mg) falls within the 95% confidence interval",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 42,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "Ten bottles of the same iced tea were analyzed for caffeine. Sample 5 appears unusually low.\nDetermine how low the Sample 5 value would have to be before a 95% Q-test would classify it as an\noutlier. Show your work. Use Q = 0.466 for N = 10 at the 95% confidence level.\ncrit\nSample 1 2 3 4 5 6 7 8 9 10\nCaffeine\n78 82 81 77 72 79 82 81 78 83\n(ppm)",
      "key": "71.8 ppm or low.",
      "hint": "Sort the data, compute gap/range, and compare Qcalc with Qcrit."
    },
    {
      "number": 43,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "Five replicate measurements were made for lead in a tap-water sample. Complete the analysis\nbelow:\nTrial 1 2 3 4 5\nPb (ppm) 1.3 1.4 1.0 1.3 1.4\na. Calculate the mean, sample standard deviation, and 95% confidence limit for the full data\nset.\nb. Use a 95% Q-test to decide whether the lowest value should be rejected. Use Q = 0.710 for\ncrit\nN = 5.\nc. If rejection is justified, recalculate the mean, sample standard deviation, and 95%\nconfidence limit. Briefly explain how the conclusion changes.",
      "key": "Mean = 1.28, S d= 0.164., 95% confidence Limit = 1.28 ± 0.20 ppm, Q- test = 0.75 after Recalculation\nMean = 1.35, Sd= 0.058, 95% confidence Limit = 1.35 ± 0.09.",
      "hint": "Sort the data, compute gap/range, and compare Qcalc with Qcrit."
    },
    {
      "number": 44,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "Apply a 95% Grubbs test to the tap-water lead data below to evaluate the suspected outlier. Based\non the test result, report the mean, sample standard deviation, and 95% confidence limit that should\nbe used.\nTrial 1 2 3 4 5\nPb (ppm) 1.3 1.4 1.0 1.3 1.4",
      "key": "Mean Full Data: 1.28, Sd = 0.164, Grubbs Stats: 1.71\nMean = 1.35, Standard deviation: 0.058, 95% Confidence limit = 1.35±0.09",
      "hint": "Calculate the mean and sample standard deviation using the full data set, including the suspected value."
    },
    {
      "number": 45,
      "topic": "Lecture practice",
      "difficulty": "Advanced",
      "prompt": "A sample of pond water was measured ten times using two different pH meters. Conduct a 95% F-\ntest to determine whether the two meters have statistically different variances.\n7\nReplicate 1 2 3 4 5 6 7 8 9 10\nMeter 1\n6.74 6.49 6.71 6.62 6.76 6.67 6.99 6.68 6.96 6.52\npH\nMeter 2\n6.93 6.83 6.90 6.79 6.88 6.64 7.10 7.18 7.04 6.97\npH",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Put the larger variance in the numerator so Fcalc is at least one."
    },
    {
      "number": 46,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "A laboratory is validating a new method for glucose in blood samples. Seven patient samples were\nanalyzed by both established Method A and a new Method B. Because each patient sample was\nanalyzed by both methods, use a paired t-test at the 95% confidence level to decide whether the\ntwo methods give statistically equivalent results.\nSample 1 2 3 4 5 6 7\nMethod A\n95.2 108.5 122.3 87.6 134.2 101.7 115.8\n(mg/dL)\nMethod B\n96.1 109.8 123.1 88.9 135.5 102.3 116.4\n(mg/dL)",
      "key": "t = 7.91 > t = 2.447, the methods are significantly different\ncalc crit",
      "hint": "Subtract paired measurements first, then run the t-test on the differences."
    },
    {
      "number": 47,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "A pharmaceutical sample was tested for residual methanol. The safety limit is 50.0 ppm methanol.\nFive sub-samples gave the following results: 52.4, 51.1, 53.0, 52.8, 65.2 ppm\na. Use the Grubbs test at 95% confidence to determine whether 65.2 ppm should be rejected\nas an outlier.\nb. After deciding whether to keep or reject 65.2 ppm, calculate the mean and standard\ndeviation of the final data set.\nc. Use a one-sample t-test to determine whether the mean methanol concentration is\nsignificantly greater than the limit of 50.0 ppm at 95% confidence.",
      "key": "a. reject\nb. the methanol concentration is significantly greater than 50.0 ppm.",
      "hint": "Identify the measured quantities first, then apply the significant-figure rule for the operation being performed."
    },
    {
      "number": 48,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "A forensic lab is comparing a standard GC method with a new faster GC method for blood alcohol\nconcentration (BAC) analysis.\nMethod n Mean BAC (%) Standard deviation\nStandard method 10 0.082 0.003\nNew method 6 0.089 0.004\na. Use an F-test at 95% confidence to determine whether the two methods have significantly\ndifferent variances. Based on your result, state whether it is appropriate to use a pooled\nstandard deviation.\n8\nb. At 95% confidence to determine whether the two methods give significantly different mean\nBAC results. Based on your results, does the new method have comparable precision to the\nstandard method? Does it give a comparable average BAC result?",
      "key": "a. The variances are not significantly different. Yes, it is appropriate to use a pooled standard\ndeviation. Because the F-test showed no significant difference in the variances of the two\nmethods, we can follow the assumption that their measurement variability is similar. Combining\nthem into a pooled SD (s ) provides a better estimate of the common experimental\npooled\nuncertainty for comparing the means\nb. the difference between the two means is statistically significant\n4\n. a. This data set should be analyzed using a paired t-test because both analytical methods are\napplied to the same individual samples. By measuring the same eight patients with both the\nbiosensor and the reference method, the study design eliminates patient-to-patient variability in\nblood glucose levels. If an unpaired t-test were used, the large natural differences in glucose\nconcentration between patients would likely mask any actual systematic difference between the\ntwo analytical methods.\nb. d¯ = 3.75 mg/dL, and s = 0.886 mg/dL\n\nc. t = 11.97 the difference between the two methods is statistically significant.\ncalc",
      "hint": "Identify the measured quantities first, then apply the significant-figure rule for the operation being performed."
    },
    {
      "number": 49,
      "topic": "Statistics",
      "difficulty": "Advanced",
      "prompt": "A new biosensor is being compared with a reference hospital method for blood glucose analysis.\nEach patient sample was split into two portions: one measured by the biosensor and one measured\nby the reference method.\nPatient Biosensor (mg/dL) Reference Method (mg/dL)\n1 92 88\n2 45 42\n3 110 105\n4 78 75\n5 55 52\n6 130 125\n7 88 85\n8 65 61\na. Explain why this data set should be analyzed using a paired t-test instead of an unpaired t-\ntest.\nb. Calculate the difference for each patient:\n𝑑 = Biosensor − Reference Method\nThen calculate the mean difference, 𝑑ˉ, and the standard deviation of the differences, 𝑠 .\n𝑑\nc. Determine whether the biosensor gives significantly different results from the reference\nmethod (at 95% confidence).",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the measured quantities first, then apply the significant-figure rule for the operation being performed."
    },
    {
      "number": 50,
      "topic": "Calibration",
      "difficulty": "Advanced",
      "prompt": "Use the quinine calibration data below to estimate LOD and LOQ.\nQuinine concentration (ppm) Measured Fluorescence Intensity (AU)\n1.0 157.3\n2.0 301.1\n9\nQuinine concentration (ppm) Measured Fluorescence Intensity (AU)\n3.0 363.4\n4.0 601.5\n5.0 709.0\nBlank\n1 2 3 4 5 6 7 8\nmeasurement\nFluorescence\n0.0008 0.0001 0.00014 0.0010 0.00236 -0.0016 0.00039 -0.00221\nIntensity (AU)",
      "key": "LOD: 3.1 x 10-5 ppm\nLOQ: 1.0 x 10-4 ppm",
      "hint": "Build the line y = mx + b, then use the slope and intercept to convert signal back to concentration."
    },
    {
      "number": 51,
      "topic": "Calibration",
      "difficulty": "Advanced",
      "prompt": "The following calibration and blank data were collected for aqueous carbonate.\nConcentration (M) Signal\n0.000 0.01435\n0.000 0.01520\n0.000 0.01380\n0.000 0.01465\n0.000 0.01410\n0.000 0.01495\n0.000 0.01450\n0.001 0.02235\n0.002 0.03137\n0.005 0.05673\n0.010 0.09985\n0.020 0.1842\n0.030 0.26915\n0.050 0.43973\n0.080 0.69415\n0.100 0.8645\nConstruct the calibration curve using only the non-blank standards. Report on the least-squares\nregression equation and R2 value.\na. Calculate the blank mean and sample standard deviation.\nb. Calculate concentration LOD and LOQ.\nc. Determine the carbonate concentration in an unknown sample with signal = 0.5000.\n10\nd. Determine the carbonate concentration in an unknown sample with signal = 1.3.\ne. State whether this result falls within the calibrated range and whether it should be reported\nwithout dilution or additional calibration.",
      "key": "a. y = 8.502x + 0.0143, R2 = 1\nb. blank mean: 0.0145, blank std: 0.000481\nc. LOD = 0.000169 M, LOQ = 0.000566\nx x\nd. x = 0.0571 M carbonate\ne. x = 0.151 M carbonate, this sample falls outside the calibration range and should be diluted before\ntesting or calibration in the higher concentration range should be performed.",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 52,
      "topic": "Calibration",
      "difficulty": "Advanced",
      "prompt": "You are analyzing drinking water for Pb2+ by atomic absorption spectroscopy. Because dissolved\nminerals and organic matter may create matrix effects, you use a standard addition method. Five\nseparate 25.00 ml aliquots of the water sample are prepared. Different volumes of a 50.0 ppb Pb2+\nstandard are added, and each solution is diluted to exactly 50.00 ml before measurement.\nVolume of 50.0 ppb Pb standard added (ml) Absorbance\n0.00 0.234\n5.00 0.336\n10.00 0.438\nS15.00 0.540\n20.00 0.642\na. Calculate the final concentration of added Pb2+in each solution after dilution to 50.00 ml.\nb. Plot absorbance versus final concentration of added Pb2+ and perform linear regression.\nReport on the equation and R2 value.\nc. Determine the x-intercept of the standard addition plot. What does this value represent?\nd. Calculate the Pb2+ concentration in the original drinking-water sample, accounting for the\ndilution from 25.00 ml to 50.00 ml.",
      "key": "a. 0, 5, 10, 15, and 20 ppb.\nb. y = 0.0204x + 0.234, R2 = 1.\nc. x-int = -11.5 ppb. In standard additions, the absolute value of the x-int represents the\nconcentration of the diluted sample\nd. S ince t he d ilution f actor w as 2 .0 ( the sample was diluted by half), t he o riginal c oncentration w as\n23.0 ppb.",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 53,
      "topic": "Lecture practice",
      "difficulty": "Advanced",
      "prompt": "In a Gas Chromatography analysis of blood for cocaine (X), a chemist uses codeine as an internal\nstandard (S). A mixture of 2.00 mM cocaine and 2.00 mM codeine gives A = 450 and A = 600. A\nx s\npatient sample is prepared by adding 1.00 ml of 5.00 mM codeine to 4.00 ml of blood and diluting\n10.00 ml. The new peak areas are A = 380, A = 520. Calculate cocaine concentration in the original\nx s\nsample.",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    },
    {
      "number": 54,
      "topic": "QA/QC methods",
      "difficulty": "Intermediate",
      "prompt": "A solution containing 0.0500 M analyte and 0.0400 M internal standard produces signals of 320 and\n410 arbitrary units, respectively. Calculate the response factor (F) and explain how it accounts for\nrandom errors like variation in the quantity of sample analyzed from run to run.",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the lecture topic, list the known quantities with units, then choose the equation before calculating."
    },
    {
      "number": 55,
      "topic": "Calibration",
      "difficulty": "Advanced",
      "prompt": "In a successive addition experiment, the x-intercept of the plot of Absorbance vs. Volume of\nStandard Added is found to be −2.45 ml. If 10.00 ml of the unknown was used and the standard\nconcentration was 50.0 ppm, calculate the analyte concentration in the original unknown.\n11\n. A lab is considering Method B as a faster replacement for Method A. The same standard was\nanalyzed six times by each method. Use an appropriate statistical test, such as a two-sample t-test\nat the 95% confidence level, to decide whether Method B gives a significantly different mean result\nfrom Method A.\nReplicate 1 2 3 4 5 6\nMethod A 9.88 9.91 9.99 9.87 9.97 10.02\nMethod B 10.24 10.17 10.01 9.97 10.05 10.09",
      "key": "Instructor key was not extracted cleanly. Try the problem first, then ask for review if needed.",
      "hint": "Identify the measured quantities first, then apply the significant-figure rule for the operation being performed."
    },
    {
      "number": 57,
      "topic": "Calibration",
      "difficulty": "Advanced",
      "prompt": "A student is analyzing p-nitroaniline by UV–Visible spectroscopy. Before measuring the standards,\nthe instrument was zeroed using a reagent blank. The calibration standards and absorbance values\nare shown below. An unknown sample gave an average absorbance of 0.181 AU from 5 replicate\nmeasurements.\np-Nitroaniline concentration (ppm) Absorbance (AU)\n19.5 0.980\n9.74 0.440\n4.87 0.255\n0.974 0.101\na. In Excel, create a calibration curve and force the trendline through zero. To do this, open\nthe Format Trendline pane and check Set Intercept = 0. Use the equation of the line to\ncalculate the concentration of the unknown.\nb. Repeat the calculation, but this time allow Excel to calculate the intercept normally instead\nof forcing it to zero.\nc. Compare the unknown concentrations obtained from the two calibration models. Are the\ncalculated concentrations noticeably different? Briefly discuss what this suggests about the\ncalibration model.\nd. The two calibration models may give slightly different results because of both experimental\nscatter and possible background signal from the blank. Based on your calibration results,\ndo you think the differences are more consistent with random error, a\nsystematic/background signal, or both? Explain your reasoning using the behavior of the\nintercept and the calibration data. What additional evidence would help you decide whether\nforcing the calibration through zero is justified?",
      "key": "a. 3.66 ppm\nb. 3.26 ppm\nc. The two models give noticeably different concentrations. Forcing the calibration through zero\ngives a higher result because the nonzero intercept is absorbed into the slope, introducing\nsystematic error and biasing the calculated unknown concentration.\nd. The difference is more consistent with a systematic/background error than only random\nscatter. The unforced calibration gives an intercept of about 0.0257 AU, which is relatively large\ncompared with the lowest standard absorbance of 0.101 AU. This suggests the blank may not\nhave fully corrected the background signal. Random error still contributes to scatter, but a\nconsistent positive intercept of this size points more toward systematic bias. Additional reagent\nblank measurements and an LOD/LOQ calculation would help. If the blank signal is close to 0.026\n5\nAU or the intercept is larger than expected from t he blank noise/LOD, the unforced model would\nbe more defensible.",
      "hint": "Identify the measured quantities first, then apply the significant-figure rule for the operation being performed."
    },
    {
      "number": 58,
      "topic": "Calibration",
      "difficulty": "Advanced",
      "prompt": "A set of calcium standards was analyzed by flame atomic absorption spectroscopy (FAAS). The\ncalibration data and blank measurements are shown below.\n12\nCa concentration (ppm) Absorbance (AU)\n0.100 0.010\n0.250 0.024\n0.500 0.069\n1.000 0.093\n2.500 0.225\n5.000 0.427\n7.500 0.628\n10.00 0.804\nBlank\n1 2 3 4 5 6 7 8\nmeasurement\nAbsorbance (AU) 0.001 0.000 0.000 0.001 0.002 -0.001 0.000 -0.001\nA urine sample was diluted before analysis by transferring 2.00 mL of the original urine sample into\na flask and diluting it to a final volume of 5.00 mL. The diluted sample was analyzed three times,\ngiving a mean absorbance of 0.325 AU.\na. Use Excel to make a calibration curve for the calcium standards. Add a linear trendline and\ndisplay the equation on the chart. Use the calibration equation to calculate the calcium\nconcentration in the diluted urine sample.\nb. Use the dilution factor to calculate the calcium concentration in the original urine sample\nbefore dilution.\nc. Calculate the average blank signal, 𝑦 , and the standard deviation of the blank\nblank\nsignal, 𝑠 , using Excel.\nblank\nd. Calculate the signal-based detection limit and quantitation limit:\n𝐿𝑂𝐷 = 𝑦 + 3𝑠\n𝑦 𝑏𝑙𝑎𝑛𝑘 𝑏𝑙𝑎𝑛𝑘\n𝐿𝑂𝑄 = 𝑦 + 10𝑠\n𝑦 𝑏𝑙𝑎𝑛𝑘 𝑏𝑙𝑎𝑛𝑘\nReport both values in absorbance units.\ne. Use the slope of the calibration curve to convert the blank noise into concentration-based\nlimits:\n3𝑠\n𝑏𝑙𝑎𝑛𝑘\n𝐿𝑂𝐷 =\n𝑥 𝑚\n10𝑠\n𝑏𝑙𝑎𝑛𝑘\n𝐿𝑂𝑄 =\n𝑥 𝑚\nReport both values in ppm Ca.\nf. Compare the calcium concentration in the diluted urine sample with the LOD and LOQ. Is\nthe calcium in the diluted sample detectable? Is it high enough to report quantitatively?\nExplain briefly.\n13",
      "key": "a. 3 .86 ppm\nb. 9.65 ppm\nc. LOD = 0.00337 AU, and LOQ = 0.01065 AU\n \nd. LOD = 0.038 ppm Ca, and LOQ = 0.128 ppm Ca\n \ne. The calcium in the diluted urine sample is detectable because its concentration is significantly\nhigher than the LOD (3.86 ppm ≫ 0.038 ppm). It is also high enough to report quantitatively\nbecause it exceeds the LOQ (3.86 ppm ≫ 0.128 ppm), meaning the signal is large enough for\nquantitative analysis with reasonable confidence.\n6",
      "hint": "Start by writing the known volume and amount units, convert to liters and moles, then apply the concentration or dilution relationship."
    }
  ],
  "sourcePdfTagged": true,
  "tools": [
    "Calibration Curve Builder",
    "Control Chart Lab",
    "Spike Recovery and LOD/LOQ Coach"
  ]
};
