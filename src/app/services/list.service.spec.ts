import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';
import { of } from 'rxjs';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ListService', () => {
  let service: ListService;
  let httpController: HttpTestingController;
  let listServiceSpy: jasmine.SpyObj<ListService>;

  let url = 'https://random-data-api.com/api/coffee/random_coffee';

  let mockCoffeeList = [
    {
        "id": 6448,
        "uid": "38f46ed9-2838-4010-8226-3b5d6107d432",
        "blend_name": "Street Level",
        "origin": "Travancore, India",
        "variety": "Ethiopian Heirloom",
        "notes": "complex, full, cinnamon, meyer lemon, vanilla",
        "intensifier": "tart"
    },
    {
        "id": 4992,
        "uid": "062fc20b-7f92-4a3e-b338-87fa6912780b",
        "blend_name": "Green Java",
        "origin": "Lake Tawar, Sumatra",
        "variety": "San Ramon",
        "notes": "tart, watery, bergamot, prune, red apple",
        "intensifier": "dense"
    },
    {
        "id": 8561,
        "uid": "84cd28cc-2d32-4424-91be-12a0c9383a2c",
        "blend_name": "Captain's Equinox",
        "origin": "Matagalpa, Nicaragua",
        "variety": "Agaro",
        "notes": "sharp, silky, mint, lemon verbena, lemonade",
        "intensifier": "crisp"
    },
    {
        "id": 2174,
        "uid": "61e168e9-14a9-4011-8fca-8e5da838e6d8",
        "blend_name": "Split Volcano",
        "origin": "Colima, Mexico",
        "variety": "Colombia",
        "notes": "complex, smooth, lavender, figs, leathery",
        "intensifier": "sharp"
    },
    {
        "id": 6239,
        "uid": "0a3a5fe9-baf8-492e-ba81-8063a9697091",
        "blend_name": "Good-morning Level",
        "origin": "Kayanza, Burundi",
        "variety": "Villa Sarchi",
        "notes": "dirty, velvety, pineapple, pineapple, leafy greens",
        "intensifier": "mild"
    },
    {
        "id": 6929,
        "uid": "973ddad2-a840-401e-b746-b4d6ef6a5245",
        "blend_name": "Chocolate Blend",
        "origin": "Acatenango, Guatemala",
        "variety": "Liberica",
        "notes": "deep, silky, black-tea, liquorice, potato defect!",
        "intensifier": "vibrant"
    },
    {
        "id": 9241,
        "uid": "91b6b57f-bd80-4b4c-8bc0-980453e8a909",
        "blend_name": "Morning Level",
        "origin": "Mattari, Yemen",
        "variety": "Liberica",
        "notes": "clean, watery, toast, clementine, sweet pea",
        "intensifier": "dull"
    },
    {
        "id": 7222,
        "uid": "5870784f-8386-47e0-bd43-47c650541f7c",
        "blend_name": "Holiday Cup",
        "origin": "Kiamba, Kenya",
        "variety": "Ethiopian Heirloom",
        "notes": "faint, juicy, graham cracker, medicinal, mushroom",
        "intensifier": "wild"
    },
    {
        "id": 453,
        "uid": "141728e5-3ef1-46fc-92ef-67f7bf96ef2d",
        "blend_name": "Blacktop Look",
        "origin": "San'ani, Yemen",
        "variety": "Pink Bourbon",
        "notes": "mild, tea-like, cranberry, olive, sundried tomato",
        "intensifier": "crisp"
    },
    {
        "id": 9251,
        "uid": "061e9606-885b-437f-b7db-de964f1c375c",
        "blend_name": "Huggy Extract",
        "origin": "Nyanza, Kenya",
        "variety": "Dilla",
        "notes": "astringent, coating, quakery, honeysuckle, bakers chocolate",
        "intensifier": "pointed"
    },
]

  beforeEach(() => {
    listServiceSpy = jasmine.createSpyObj('ListService', ['GetCoffeeList']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ListService, useValue: listServiceSpy}
      ]
    });
    service = TestBed.inject(ListService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GetCoffeeList and return an array of List', () => {
    listServiceSpy.GetCoffeeList.and.returnValue(of({ mockCoffeeList }));
    service.GetCoffeeList(10, 0).subscribe((res) => {
      expect(res).toEqual(mockCoffeeList);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}?size=10&page=0`,
    });

    req.flush(mockCoffeeList);
  });
});
