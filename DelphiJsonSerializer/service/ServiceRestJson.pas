unit ServiceRestJson;

interface

uses
  REST.JSON,
  uPeople;

type
  TServiceRestJson = class
    FPeople: TPeople;
  private
  public
    constructor Create(const aName: string; const aAge: Integer; const aStreet, aNumber: string);
    function GetJson: string;
    function GetPeople(const aJson: string): TPeople;
  end;

implementation

{ TServiceRestJson }

constructor TServiceRestJson.Create(const aName: string; const aAge: Integer; const aStreet, aNumber: string);
begin
  FPeople := TPeople.Create(nil);
  FPeople.Name := aName;
  FPeople.Age := aAge;
  FPeople.Address.Street := aStreet;
  FPeople.Address.Number := aNumber;
end;

function TServiceRestJson.GetJson(): string;
begin
  Result := TJSON.ObjectToJsonString(FPeople);
end;

function TServiceRestJson.GetPeople(const aJson: string): TPeople;
begin
  FPeople := TJson.JsonToObject<TPeople>(aJson);
  Result := FPeople;
end;

end.
