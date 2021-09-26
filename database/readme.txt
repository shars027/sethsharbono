JSON structure:
portfolio
- column
  - id
  - type
  - ref
  - background (changes background color of  modal)
  - color (changes font color of site title and captions in modal)
  - videocontrols (tells video to have controls instead of looping)
  - link
  - slides
    - type
    - ref
    - cap
    - videocontrols

Types:
- image
- video
- videolink
  - if the type is a videolink there must be a corresponding link key in the object IE:
  {
    "id": "mo17",
    "type": "videolink",
    "ref": "highlights/6.mp4",
    "link": "projects/systematictype/index.html"
  }

If a part of an object does not exist, do not include it. For example, if the type is not videolink, do not include the link key
{
  "id": "mo17",
  "type": "videolink",
  "ref": "highlights/6.mp4",
  "link": "projects/systematictype/index.html"
}

vs

{
  "id": "mo17",
  "type": "video",
  "ref": "highlights/6.mp4",
}

Each item in a column object must have an id, type and ref
Each item in a slides object must have a type and ref

Portfolio, column and slides are arrays of objects. The structure is like this:
"portfolio": [{...object},{...object},{...object}]
"portfolio": [{"column"[{...object},{...object},{...object}]},{...object},{...object}]
"portfolio": [{"column"[{...info, "slides":[{...object},{...object},{...object}]},{...object},{...object}]},{...object},{...object}]


An example structure:
{
	"portfolio": [
    {
			"column": [
        {
					"id": "mo1",
					"type": "image",
					"ref": "highlights/1.jpg",
					"slides": [
            {
							"type": "image",
							"ref": "projects/mc/1.jpg",
							"cap": "Mariah Carey -- 30th Anniversary Logo"
						}
					]
				}
			]
		}
	]
}

A linter may reformat it to look like this:
{
	"portfolio": [{
			"column": [{
					"id": "mo1",
					"type": "image",
					"ref": "highlights/1.jpg",
					"slides": [{
							"type": "image",
							"ref": "projects/mc/1.jpg",
							"cap": "Mariah Carey -- 30th Anniversary Logo"
						}
					]
				}
			]
		}
	]
}

You can always run your json through a linter like the one here: https://jsonlint.com/ to make sure there are no errors.

Best course of action when transfering data is put your columns in first, then the portfolio pieces for each column, then the slides in each portfolio piece
Step 1
{
	"portfolio": [
			{"column": []},
      {"column": []},
      {"column": []}
	]
}

Step 2
{
	"portfolio": [
			{
      "column": [
        {
          "id": "mo1",
          "type": "image",
          "ref": "highlights/1.jpg"
        },
        {
          "id": "mo2",
          "type": "image",
          "ref": "highlights/2.jpg"
        },
        {
          "id": "mo3",
          "type": "video",
          "ref": "highlights/3.mp4"
        }
      ]
      },
      {"column": []},
      {"column": []}
	]
}

Step 3
{
	"portfolio": [
			{
      "column": [
        {
          "id": "mo1",
          "type": "image",
          "ref": "highlights/1.jpg"
          "slides": [
            {
  						"type": "video",
  						"ref": "projects/amtrac/1.mp4",
  						"cap": "AMTRAC -- Remix Artwork"
						}
          ]
        },
        {
          "id": "mo2",
          "type": "image",
          "ref": "highlights/2.jpg"
        },
        {
          "id": "mo3",
          "type": "video",
          "ref": "highlights/3.mp4"
        }
      ]
      },
      {"column": []},
      {"column": []}
	]
}


Functionality:
- Pages grab the json file of the same name from the database folder
- If a slideshow only has one slide navigation is automatically hidden
- Ids can be any non-space having string as long as they do not repeat the json file
- Ids show up in the site url, so when I user goes to that specific url the corresponding slideshow will open automatically
  - this way users can share specific pieces
- If an id does not exist in the json, the slideshow does not open
